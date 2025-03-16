import UserController from "../../src/controllers/userController";
import { Request, Response } from "express";
import UserService from "../../src/services/userService";

const mockRequest = { body: { name: "test name", email: "test@test.com" } };
const mockResponse = {
  status: () => ({
    json: () => {
      return {
        name: "test",
        email: "test@test.com",
        id: 1,
        createdAt: "2021-05-01T00:00:00.000Z",
        updatedAt: "2021-05-01T00:00:00.000Z",
      };
    },
  }),
};

jest.mock("../../src/services/userService");

const mockNewUser = jest.fn().mockResolvedValueOnce(mockResponse);

describe("test new user method", () => {
  beforeEach(async () => {
    UserService.newUser = mockNewUser;
  });
  it("should return the correct response", async () => {
    const data = await UserController.newUser(
      mockRequest as unknown as Request,
      mockResponse as unknown as Response,
    );
    expect(data).toEqual(mockResponse.status().json());
  });
});
