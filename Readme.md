# GIFE backend

This is application structure.

Name | Description
------------ | -------------
**configs** | contains all project configs *please beware of privacy and security of our project here.*
**services** | *this is main directory* contains all backend logics. At least consists of 3 file (index, controller, model)
**tests** | contains tests -> we use [AVA](https://github.com/avajs/ava)

---

Code style

* Use ESLint + Airbnb Javascript Style Guide
* Write semantic code (explain the code by writing an understanble code. Minimize unnecessary comment)
* ~~Declarative variable naming~~
* USE 2 SPACES not tab
* Always try to use ES6 features, like async/await instead of Promise (we use node 8)
