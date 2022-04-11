module.exports = class UserDto {
  userName;
  email;
  id;
  isActive;

  constructor(model) {
    this.userName = model.name;
    this.email = model.email;
    this.id = model.id;
    this.isActive = model.isActive;
  }
};
