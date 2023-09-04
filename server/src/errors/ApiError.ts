export class ApiError {
  status: number;
  message: string;
  type: string;

  constructor(status: number, message: string, type: string) {
    this.status = status;
    this.message = message;
    this.type = type;
  }

  static badRequest() {
    return new ApiError(400, "BadRequest", "Bad request");
  }
}
