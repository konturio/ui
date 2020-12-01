# Kontur Mock Tool
Kontur spec tool helps to write mocks, spec and generate tests from those mocks

## How to add mocks
Add mock response in json format to `./mock` folder.

For example:
You want to add new REST api endpoint `GET /blogs/`, let's do i step by step:

#### 1. Create folder
Create folder with same path asa endpoint inside `./mock` folder: `./mock/blogs/`

#### 2. Create response example
Create `.json` file in folder created on prev step.
File name must contain method, so in our case it will be `./mock/blogs/get.json`

#### 3. Run mock server
Use `yarn mock` for run mock server on `localhost:5000` address.
GET request to `http://localhost:5000/blogs/` return you content from json file.

#### 4. Dynamic path
You can use variables with any name in curly braces. For example, if you create file in folder `./mock/blogs/{blog_id}/get.json` mock server response on requests like
- `http://localhost:5000/blogs/1/`
- `http://localhost:5000/blogs/2/`
- `http://localhost:5000/blogs/n/`
- `http://localhost:5000/blogs/any-uuid/`

With same mock from folder `./mock/blogs/{blog_id}/get.json`

You can use variable even in file name. For example:
`./mock/blogs/1/{method}.json`

#### 5. Dynamic mock
You can use variable from path in mocks. For that add to .json file same variable as in path:

`./mock/blogs/{blog_id}/get.json` :
```
{
  id: {blog_id},
  content: 'Lorem ipsum'
}
```

GET Request to `http://localhost:5000/blogs/1/` will be served with next response:
```
{
  id: 1,
  content: 'Lorem ipsum'
}
```

#### 5. Dynamic mock vs static mocks
If you have both in one folder - dynamic and static mocks - static have more priority.
For example if you have:
- `./mock/blogs/{blog_id}/get.json`
- `./mock/blogs/1/get.json`

Mock server will response on `http://localhost:5000/blogs/1/` with `./mock/blogs/1/get.json`,
and `./mock/blogs/{blog_id}/get.json` on other request with any other id.

#### 6. Only one variable on same level
If you have more than one variables on same level, for example:
- `./mock/blogs/{blog_id}/get.json`
- `./mock/blogs/{post_id}/get.json`
Mock server throw exception, because it that case is no certainty about which file to use.

## How to generate spec.md file from mocks
work in progress...

## How to generate TypeScript interfaces from mocks
work in progress...

## How to generate and run api tests for real backend
work in progress...
