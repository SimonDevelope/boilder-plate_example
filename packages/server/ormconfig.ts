require("dotenv").config();
import { ConnectionOptions } from "typeorm";

const ormconfig: ConnectionOptions = {
  type: "",
  host: "",
  port: "",
  username: "",
  password: "",
  database: "",
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  cli: {
    entitiesDir: "src/entity/**/*.ts",
  },
};

export default ormconfig;
