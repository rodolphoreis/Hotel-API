import express from "express";
import cors from "cors";
import prisma from "../prisma/prisma-client";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/hotel", async (request, response) => {
  try {
    const reserve = await prisma.hotel.findMany();
    return response.status(200).json({ message: "Reserva ok", error: false });
  } catch (error) {
    console.error("Erro ao efetuar reserva.", error);
    return response.status(500).json({ message: error, error: true });
  }
});

app.post("/hotel", async (request, response) => {
  const { checkInDate, checkOutDate, name, numberOfGuests, roomType } =
    request.body;
  try {
    const newReserve = await prisma.hotel.create({
      data: {
        checkInDate,
        checkOutDate,
        name,
        numberOfGuests,
        roomType,
      },
    });
    return response
      .status(201)
      .json({ message: "Reserva efetuada com sucesso.", error: false });
  } catch (error) {
    console.error("Erro ao criar reserva.", error);
    return response.status(500).json({ message: error, error: true });
  }
});

app.put("/hotel/:id", async (request, response) => {
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
    return response
      .status(200)
      .json({ message: "Atualizou a reserva", error: false });
  } catch (error) {
    console.error("Erro ao atualizar reserva", error);
    return response
      .status(500)
      .json({ message: "Erro ao atualizar", error: true });
  }
});

app.delete("/hotel/:id", async (request, response) => {
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

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}!`);
});
