// * ARCHIVO A COMPLETAR
import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ProjectModel = sequelize.define(
  "Project", 
  { 
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("planning", "in_progress", "paused", "finished"),
      allowNull: false,
      defaultValue: "planning"
    },

    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    budget: {
      type:DataTypes.DECIMAL,
      allowNull:false
    },
    leader_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
  // TODO: 1. code: string, único y obligatorio. HECHO
  // TODO: 2. name: string, obligatorio.         HECHO
  // TODO: 3. description: texto, obligatorio.   HECHO
  // TODO: 4. status: ENUM con los valores planning, in_progress, paused y finished; obligatorio y con planning como valor por defecto. HECHO
  // TODO: 5. start_date: fecha (solo día), obligatoria.  HECHO
  // TODO: 6. budget: decimal, obligatorio.      HECHO
  // TODO: 7. leader_id: entero, obligatorio, clave foránea hacia User. HECHO
});
