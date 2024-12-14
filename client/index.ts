import { ByteExport } from "byte-client";

const byte = exports["Byte"].Import() as ByteExport;
const logger = byte.utils.Logger.construct("template-main");

logger.info("Template client started!");