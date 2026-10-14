// * ARCHIVO A COMPLETAR
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const TechnologyModel = sequelize.define(
  "Technology", 
  { name: {
    type:DataTypes.STRING(),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
  // TODO: 1. name: string, único y obligatorio. HECHO
  // TODO: 2. description: texto, opcional.      HECHO
});
