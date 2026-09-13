# Jest Unit Testing Rules

* Use **Jest for unit testing only**.
* Do not modify, refactor, redesign, or rewrite production code unless I explicitly ask you to.
* Do not add new features or change existing functionality.
* Do not change dummy data, UI, routes, or project structure unnecessarily.
* Test small, isolated units such as utility functions, helpers, validation, and simple business logic.
* Keep tests simple, readable, and beginner-friendly.
* Follow the **Arrange → Act → Assert** pattern where appropriate.
* Test meaningful behavior, including normal cases and important edge cases.
* Avoid unnecessary mocking. Use `jest.fn()` or `jest.mock()` only when needed.
* Do not introduce other testing frameworks or end-to-end testing.
* Before changing anything, inspect the existing code and testing setup.
* After writing tests, run them and report the results.
* If you find a bug in production code, **report it instead of fixing it automatically**.
* Make the smallest possible changes required to add tests.
* If you are unsure whether a change is necessary, ask me before making it.

**Main priority:** Protect the existing application and write simple, professional Jest unit tests.
