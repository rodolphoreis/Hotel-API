import { Router } from "express";
import prisma from "../../prisma/prisma-client";

const routes = Router();

routes.get("/hotel", async (request, response) => {
  try {
    const reserve = await prisma.hotel.findMany();
    return response.status(200).json({ message: reserve, error: false });
  } catch (error) {
    console.error("Erro ao efetuar reserva.", error);
    return response.status(500).json({ message: error, error: true });
  }
});

routes.post("/hotel", async (request, response) => {
  const { checkInDate, checkOutDate, name, numberOfGuests, roomType } =
    request.body;
  try {
    const checkInDateISO = new Date(checkInDate).toISOString();
    const checkOutDateISO = new Date(checkOutDate).toISOString();
    const newReserve = await prisma.hotel.create({
      data: {
        checkInDate: checkInDateISO,
        checkOutDate: checkOutDateISO,
        name,
        numberOfGuests,
        roomType,
      },
    });
    return response.status(201).json({ message: newReserve, error: false });
  } catch (error) {
    console.error("Erro ao criar reserva.", error);
    return response.status(500).json({ message: error, error: true });
  }
});

routes.put("/hotel/:id", async (request, response) => {
  const { id } = request.params;
  const { checkInDate, checkOutDate, name, numberOfGuests, roomType } =
    request.body;
  try {
    const updateReserve = await prisma.hotel.update({
      where: {
        id,
      },
      data: {
        checkInDate,
        checkOutDate,
        name,
        numberOfGuests,
        roomType,
      },
    });
    return response.status(200).json({ message: updateReserve, error: false });
  } catch (error) {
    console.error("Erro ao atualizar reserva", error);
    return response
      .status(500)
      .json({ message: "Erro ao atualizar", error: true });
  }
});

routes.delete("/hotel/:id", async (request, response) => {
  const { id } = request.params;
  try {
    await prisma.hotel.delete({
      where: {
        id,
      },
    });
    return response.sendStatus(204);
  } catch (error) {
    console.error({ message: "Erro ao deletar reserva", error });
    return response.status(500).json({ message: error, error: true });
  }
});
