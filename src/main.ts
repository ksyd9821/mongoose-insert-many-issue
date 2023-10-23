import { NestFactory } from "@nestjs/core";
import { AppModule } from "./App/app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true, logger: ["error", "warn"] });

    await app.listen(80);
}


bootstrap();
