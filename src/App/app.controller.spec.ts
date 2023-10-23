import { Test, TestingModule } from "@nestjs/testing";
import { PlaygroundController } from "../PlaygroundController";
import { AppService } from "./app.service";

describe("AppController", () => {
    let appController: PlaygroundController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [PlaygroundController],
            providers: [AppService]
        }).compile();

        appController = app.get<PlaygroundController>(PlaygroundController);
    });

    describe("root", () => {
        it("should return \"Hello World!\"", () => {
            expect(appController.getHello()).toBe("Hello World!");
        });
    });
});
