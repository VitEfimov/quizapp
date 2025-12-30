export const cheatsheetData = {
    "Python": [
        {
            "topic": "Class Definition",
            "code": "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def greet(self):\n        print(f'Hello, {self.name}')"
        },
        {
            "topic": "Creating Object",
            "code": "p = Person('Alice', 25)\np.greet()"
        },
        {
            "topic": "Instance vs Class Variables",
            "code": "class Dog:\n    species = 'Canis'\n    def __init__(self, name):\n        self.name = name\n\nd1 = Dog('Rex')\nd2 = Dog('Fido')\nprint(d1.species, d2.species)"
        },
        {
            "topic": "Inheritance",
            "code": "class Animal:\n    def speak(self):\n        print('Animal sound')\n\nclass Dog(Animal):\n    def speak(self):\n        print('Bark')\n\nd = Dog()\nd.speak()"
        },
        {
            "topic": "Multiple Inheritance",
            "code": "class A:\n    def show(self): print('A')\nclass B:\n    def show(self): print('B')\nclass C(A,B): pass\nc = C()\nc.show()"
        },
        {
            "topic": "super()",
            "code": "class A:\n    def __init__(self): print('A')\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print('B')\nB()"
        },
        {
            "topic": "Method Overriding",
            "code": "class Parent:\n    def greet(self): print('Hello Parent')\nclass Child(Parent):\n    def greet(self): print('Hello Child')\nChild().greet()"
        },
        {
            "topic": "Private and Protected",
            "code": "class MyClass:\n    _protected = 'Protected'\n    __private = 'Private'\n\nobj = MyClass()\nprint(obj._protected)\n# print(obj.__private) # AttributeError"
        },
        {
            "topic": "Class Methods",
            "code": "class Person:\n    count = 0\n    @classmethod\n    def increase_count(cls):\n        cls.count += 1\nPerson.increase_count()\nprint(Person.count)"
        },
        {
            "topic": "Static Methods",
            "code": "class Math:\n    @staticmethod\n    def add(a,b):\n        return a+b\nprint(Math.add(2,3))"
        },
        {
            "topic": "Properties",
            "code": "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    @property\n    def radius(self):\n        return self._radius\n    @radius.setter\n    def radius(self, r):\n        self._radius = r\nc = Circle(5)\nc.radius = 10\nprint(c.radius)"
        },
        {
            "topic": "Magic / Dunder Methods",
            "code": "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    def __repr__(self):\n        return f'Vector({self.x}, {self.y})'\nv1 = Vector(1,2)\nv2 = Vector(3,4)\nprint(v1 + v2)"
        },
        {
            "topic": "Operator Overloading",
            "code": "class Number:\n    def __init__(self, value): self.value = value\n    def __mul__(self, other): return Number(self.value * other.value)\n    def __repr__(self): return str(self.value)\nprint(Number(2) * Number(3))"
        },
        {
            "topic": "Decorators (Function)",
            "code": "def decorator(func):\n    def wrapper(*args, **kwargs):\n        print('Before')\n        func(*args, **kwargs)\n        print('After')\n    return wrapper\n\n@decorator\ndef hello():\n    print('Hello')\nhello()"
        },
        {
            "topic": "Decorators (Class)",
            "code": "def class_decorator(cls):\n    cls.extra = 'Added'\n    return cls\n\n@class_decorator\nclass MyClass: pass\nprint(MyClass.extra)"
        },
        {
            "topic": "Abstract Base Classes",
            "code": "from abc import ABC, abstractmethod\nclass Shape(ABC):\n    @abstractmethod\n    def area(self): pass\n\nclass Square(Shape):\n    def __init__(self, s): self.s = s\n    def area(self): return self.s*self.s\nprint(Square(5).area())"
        },
        {
            "topic": "Metaclasses",
            "code": "class Meta(type):\n    def __new__(cls, name, bases, dct):\n        dct['added'] = lambda self: 'Hello'\n        return super().__new__(cls, name, bases, dct)\n\nclass MyClass(metaclass=Meta): pass\nprint(MyClass().added())"
        },
        {
            "topic": "Slots",
            "code": "class MyClass:\n    __slots__ = ['x','y']\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\nobj = MyClass(1,2)"
        },
        {
            "topic": "Singleton Pattern",
            "code": "class Singleton:\n    _instance = None\n    def __new__(cls):\n        if not cls._instance:\n            cls._instance = super().__new__(cls)\n        return cls._instance\ns1 = Singleton()\ns2 = Singleton()\nprint(s1 is s2)"
        },
        {
            "topic": "Dynamic Attributes",
            "code": "class A: pass\na = A()\na.x = 5\nprint(a.x)"
        },
        {
            "topic": "Introspection",
            "code": "class A:\n    def method(self): pass\nprint(dir(A))\nprint(hasattr(A,'method'))"
        },
        {
            "topic": "Context Managers in Classes",
            "code": "class MyCM:\n    def __enter__(self): print('Enter'); return self\n    def __exit__(self, exc_type, exc_val, exc_tb): print('Exit')\nwith MyCM() as cm: pass"
        },
        {
            "topic": "MRO (Method Resolution Order)",
            "code": "class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B,C): pass\nprint(D.__mro__)"
        },
        {
            "topic": "Callable Objects",
            "code": "class Adder:\n    def __call__(self, a,b): return a+b\nadd = Adder()\nprint(add(2,3))"
        },
        {
            "topic": "Property with Validation",
            "code": "class Person:\n    def __init__(self, age): self._age = age\n    @property\n    def age(self): return self._age\n    @age.setter\n    def age(self, value):\n        if value<0: raise ValueError('Invalid')\n        self._age = value\np = Person(10)\np.age = 20"
        }
    ],
    "JavaScript": [
        {
            "topic": "Variables",
            "code": "let x = 10;\nconst y = 20;\nvar z = 30;"
        },
        {
            "topic": "Data Types",
            "code": "let num = 10;\nlet str = 'JS';\nlet bool = true;\nlet arr = [1,2,3];\nlet obj = {a:1, b:2};\nlet func = () => {};\nlet n = null;\nlet u = undefined;"
        },
        {
            "topic": "Type Conversion",
            "code": "let x = '10';\nlet y = Number(x);\nlet z = String(123);\nlet b = Boolean(0);"
        },
        {
            "topic": "Operators",
            "code": "let sum = 10 + 20;\nlet diff = 20 - 10;\nlet prod = 2 * 3;\nlet div = 10 / 2;\nlet mod = 10 % 3;\nlet exp = 2 ** 3;"
        },
        {
            "topic": "Control Flow",
            "code": "if(x>5){console.log('>5');} else {console.log('<=5');}\n\nfor(let i=0;i<5;i++){console.log(i);}\n\nwhile(x>0){x--;}\ndo{ x++; } while(x<5);"
        },
        {
            "topic": "Functions",
            "code": "function add(a,b){ return a+b; }\nconst multiply = (a,b) => a*b;"
        },
        {
            "topic": "Arrow Functions",
            "code": "const square = x => x*x;\nconst sum = (a,b) => a+b;"
        },
        {
            "topic": "Objects",
            "code": "let obj = {name:'JS', age:25};\nconsole.log(obj.name);\nobj.height = 180;"
        },
        {
            "topic": "Destructuring",
            "code": "const {name, age} = obj;\nconst [a,b] = [1,2];"
        },
        {
            "topic": "Spread and Rest",
            "code": "let arr1=[1,2]; let arr2=[...arr1,3,4];\nfunction sum(...nums){ return nums.reduce((a,b)=>a+b,0); }"
        },
        {
            "topic": "Classes",
            "code": "class Person {\n  constructor(name, age){ this.name=name; this.age=age; }\n  greet(){ console.log(`Hello, ${this.name}`); }\n}\nconst p = new Person('Alice',25); p.greet();"
        },
        {
            "topic": "Inheritance",
            "code": "class Animal { speak(){ console.log('Animal sound'); } }\nclass Dog extends Animal { speak(){ console.log('Bark'); } }\nnew Dog().speak();"
        },
        {
            "topic": "Static Methods",
            "code": "class MathUtil {\n  static add(a,b){ return a+b; }\n}\nconsole.log(MathUtil.add(2,3));"
        },
        {
            "topic": "Getters and Setters",
            "code": "class Circle {\n  constructor(radius){ this._radius = radius; }\n  get radius(){ return this._radius; }\n  set radius(r){ this._radius = r; }\n}\nlet c = new Circle(5); c.radius = 10;"
        },
        {
            "topic": "Template Literals",
            "code": "let name='JS'; console.log(`Hello ${name}`);"
        },
        {
            "topic": "Promises",
            "code": "let p = new Promise((resolve,reject)=>{ resolve('Done'); });\np.then(val => console.log(val));"
        },
        {
            "topic": "Async/Await",
            "code": "async function main(){ let res = await Promise.resolve('Hello'); console.log(res); }\nmain();"
        },
        {
            "topic": "Error Handling",
            "code": "try{ throw new Error('Oops'); } catch(e){ console.log(e.message); } finally{ console.log('Done'); }"
        },
        {
            "topic": "Map",
            "code": "let m = new Map(); m.set('a',1); console.log(m.get('a'));"
        },
        {
            "topic": "Set",
            "code": "let s = new Set([1,2,2,3]); console.log(s);"
        },
        {
            "topic": "Array Methods",
            "code": "[1,2,3].forEach(x=>console.log(x));\n[1,2,3].map(x=>x*2);\n[1,2,3].filter(x=>x>1);\n[1,2,3].reduce((a,b)=>a+b,0);"
        },
        {
            "topic": "Destructuring Function Params",
            "code": "function greet({name,age}){ console.log(`Hello ${name}, ${age}`); }\ngreet({name:'Alice',age:25});"
        },
        {
            "topic": "Modules - ES6",
            "code": "export const pi=3.14;\nimport {pi} from './module.js';"
        },
        {
            "topic": "Modules - CommonJS",
            "code": "module.exports = {pi:3.14};\nconst m = require('./module'); console.log(m.pi);"
        },
        {
            "topic": "Optional Chaining",
            "code": "let obj = {a:{b:2}};\nconsole.log(obj?.a?.b);\nconsole.log(obj?.x?.y);"
        },
        {
            "topic": "Nullish Coalescing",
            "code": "let x = null ?? 'default'; console.log(x);"
        },
        {
            "topic": "Type Checking",
            "code": "console.log(typeof 10);\nconsole.log(Array.isArray([1,2,3]));"
        },
        {
            "topic": "Event Loop",
            "code": "console.log('Start');\nsetTimeout(()=>console.log('Timeout'),0);\nconsole.log('End');"
        },
        {
            "topic": "DOM Manipulation",
            "code": "const el = document.getElementById('app'); el.textContent = 'Hello';"
        },
        {
            "topic": "Fetch API",
            "code": "fetch('https://api.example.com').then(res => res.json()).then(data=>console.log(data));"
        },
        {
            "topic": "Destructuring Arrays",
            "code": "const arr = [1,2,3]; const [a,b,...rest] = arr;"
        },
        {
            "topic": "Rest and Spread in Objects",
            "code": "const obj1 = {a:1,b:2}; const obj2 = {...obj1,c:3};"
        },
        {
            "topic": "SetTimeout and SetInterval",
            "code": "setTimeout(()=>console.log('Delayed'),1000);\nlet id = setInterval(()=>console.log('Repeat'),1000);\nclearInterval(id);"
        },
        {
            "topic": "JSON Methods",
            "code": "let obj = {a:1}; let str = JSON.stringify(obj);\nlet newObj = JSON.parse(str);"
        },
        {
            "topic": "Closures",
            "code": "function outer(x){ return function(y){ return x+y; }; }\nlet add5 = outer(5); console.log(add5(3));"
        },
        {
            "topic": "Currying",
            "code": "const add = a => b => a+b;\nconsole.log(add(2)(3));"
        },
        {
            "topic": "Prototype",
            "code": "function Person(name){ this.name=name; }\nPerson.prototype.greet = function(){ console.log(this.name); };\nlet p = new Person('Alice'); p.greet();"
        },
        {
            "topic": "Classes & Prototype",
            "code": "class Animal{ speak(){ console.log('Hi'); } } let a = new Animal(); a.speak();"
        },
        {
            "topic": "Symbol",
            "code": "const sym = Symbol('id'); console.log(sym);"
        },
        {
            "topic": "Iterators & Generators",
            "code": "function* gen(){ yield 1; yield 2; }\nlet g = gen(); console.log(g.next().value);"
        },
        {
            "topic": "Promises All / Race",
            "code": "Promise.all([p1,p2]).then(res=>console.log(res));\nPromise.race([p1,p2]).then(res=>console.log(res));"
        },
        {
            "topic": "Error Throwing",
            "code": "function test(){ throw new Error('Fail'); }\ntry{ test(); } catch(e){ console.log(e.message); }"
        },
        {
            "topic": "Async Iterators",
            "code": "async function* asyncGen(){ yield 1; yield 2; }\nfor await (let val of asyncGen()){ console.log(val); }"
        },
        {
            "topic": "Modules Dynamic Import",
            "code": "import('./module.js').then(m=>m.func());"
        }
    ],
    "SQL": [
        {
            "topic": "Select Statement",
            "code": "SELECT * FROM employees;\nSELECT name, salary FROM employees WHERE salary > 50000;"
        },
        {
            "topic": "Distinct",
            "code": "SELECT DISTINCT department FROM employees;"
        },
        {
            "topic": "Where Clause",
            "code": "SELECT * FROM employees WHERE age >= 30 AND department = 'Sales';"
        },
        {
            "topic": "Order By",
            "code": "SELECT * FROM employees ORDER BY salary DESC, name ASC;"
        },
        {
            "topic": "Group By",
            "code": "SELECT department, COUNT(*) FROM employees GROUP BY department;"
        },
        {
            "topic": "Having Clause",
            "code": "SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 50000;"
        },
        {
            "topic": "Joins - Inner Join",
            "code": "SELECT e.name, d.name FROM employees e INNER JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Left Join",
            "code": "SELECT e.name, d.name FROM employees e LEFT JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Right Join",
            "code": "SELECT e.name, d.name FROM employees e RIGHT JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Full Outer Join",
            "code": "SELECT e.name, d.name FROM employees e FULL OUTER JOIN departments d ON e.dept_id = d.id;"
        },
        {
            "topic": "Subqueries",
            "code": "SELECT name FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"
        },
        {
            "topic": "Insert Statement",
            "code": "INSERT INTO employees(name, age, department) VALUES ('Alice', 30, 'IT');"
        },
        {
            "topic": "Update Statement",
            "code": "UPDATE employees SET salary = salary * 1.1 WHERE department = 'Sales';"
        },
        {
            "topic": "Delete Statement",
            "code": "DELETE FROM employees WHERE age < 25;"
        },
        {
            "topic": "Create Table",
            "code": "CREATE TABLE employees (\n  id INT PRIMARY KEY,\n  name VARCHAR(50),\n  age INT,\n  salary DECIMAL(10,2),\n  department VARCHAR(50)\n);"
        },
        {
            "topic": "Alter Table",
            "code": "ALTER TABLE employees ADD COLUMN hire_date DATE;"
        },
        {
            "topic": "Drop Table",
            "code": "DROP TABLE employees;"
        },
        {
            "topic": "Indexes",
            "code": "CREATE INDEX idx_name ON employees(name);"
        },
        {
            "topic": "Views",
            "code": "CREATE VIEW high_salary AS SELECT name, salary FROM employees WHERE salary > 50000;"
        },
        {
            "topic": "Transactions",
            "code": "BEGIN;\nUPDATE employees SET salary = salary * 1.1;\nCOMMIT;"
        }
    ],
    "FastAPI": [
        {
            "topic": "Install FastAPI",
            "code": "pip install fastapi uvicorn"
        },
        {
            "topic": "Basic App",
            "code": "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/')\ndef read_root():\n    return {'message': 'Hello World'}"
        },
        {
            "topic": "Run Server",
            "code": "uvicorn main:app --reload"
        },
        {
            "topic": "Path Parameters",
            "code": "@app.get('/items/{item_id}')\ndef read_item(item_id: int):\n    return {'item_id': item_id}"
        },
        {
            "topic": "Query Parameters",
            "code": "@app.get('/items/')\ndef read_items(skip: int = 0, limit: int = 10):\n    return {'skip': skip, 'limit': limit}"
        },
        {
            "topic": "Request Body",
            "code": "from pydantic import BaseModel\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post('/items/')\ndef create_item(item: Item):\n    return item"
        },
        {
            "topic": "Response Model",
            "code": "@app.get('/items/{id}', response_model=Item)\ndef read_item(id: int):\n    return {'name': 'item', 'price': 10.5}"
        },
        {
            "topic": "Dependencies",
            "code": "from fastapi import Depends\n\ndef common_parameters(q: str = None):\n    return q\n\n@app.get('/items/')\ndef read_items(q: str = Depends(common_parameters)):\n    return {'q': q}"
        },
        {
            "topic": "Middleware",
            "code": "from starlette.middleware.base import BaseHTTPMiddleware\n@app.middleware('http')\nasync def add_process_time_header(request, call_next):\n    response = await call_next(request)\n    response.headers['X-Process-Time'] = '0.1'\n    return response"
        },
        {
            "topic": "Background Tasks",
            "code": "from fastapi import BackgroundTasks\n\n@app.post('/send/')\ndef send_email(background_tasks: BackgroundTasks):\n    background_tasks.add_task(some_function)\n    return {'message':'Email scheduled'}"
        },
        {
            "topic": "Path Operation with Tags",
            "code": "@app.get('/users/', tags=['users'])\ndef read_users():\n    return []"
        }
    ],
    "Spring Boot": [
        {
            "topic": "Create Spring Boot App",
            "code": "Use https://start.spring.io/ or Spring CLI: spring init --dependencies=web myapp"
        },
        {
            "topic": "Main Application",
            "code": "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class MyApp {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApp.class, args);\n    }\n}"
        },
        {
            "topic": "Rest Controller",
            "code": "import org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping('/api')\npublic class MyController {\n    @GetMapping('/hello')\n    public String hello(){ return 'Hello Spring Boot'; }\n}"
        },
        {
            "topic": "Path Variables",
            "code": "@GetMapping('/items/{id}')\npublic String getItem(@PathVariable int id){ return 'Item '+id; }"
        },
        {
            "topic": "Request Params",
            "code": "@GetMapping('/items')\npublic String getItem(@RequestParam int id){ return 'Item '+id; }"
        },
        {
            "topic": "Post Request",
            "code": "@PostMapping('/items')\npublic Item createItem(@RequestBody Item item){ return item; }"
        },
        {
            "topic": "Service Layer",
            "code": "@Service\npublic class ItemService {\n    public List<Item> getItems(){ return new ArrayList<>(); }\n}"
        },
        {
            "topic": "Repository Layer",
            "code": "@Repository\npublic interface ItemRepository extends JpaRepository<Item, Long> {}"
        },
        {
            "topic": "Dependency Injection",
            "code": "@Autowired\nprivate ItemService itemService;"
        },
        {
            "topic": "Exception Handling",
            "code": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handleAll(){ return ResponseEntity.status(500).body('Error'); }\n}"
        },
        {
            "topic": "Properties File",
            "code": "spring.datasource.url=jdbc:mysql://localhost:3306/db\nspring.datasource.username=root\nspring.datasource.password=root"
        },
        {
            "topic": "Profiles",
            "code": "application-dev.properties\napplication-prod.properties\n@Profile('dev')\n@Service\npublic class DevService {}"
        },
        {
            "topic": "Actuator",
            "code": "Add dependency: spring-boot-starter-actuator\nAccess: /actuator/health /actuator/metrics"
        },
        {
            "topic": "Logging",
            "code": "import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nprivate static final Logger log = LoggerFactory.getLogger(MyController.class);\nlog.info('Message');"
        }
    ],
    "Java": [
        {
            "topic": "Entry Point",
            "code": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello Java\");\n    }\n}"
        },
        {
            "topic": "Primitive Data Types",
            "code": "byte b = 1;\nshort s = 2;\nint i = 3;\nlong l = 4L;\nfloat f = 1.5f;\ndouble d = 2.5;\nchar c = 'A';\nboolean flag = true;"
        },
        {
            "topic": "Wrapper Classes",
            "code": "Integer a = 10;\nDouble b = 2.5;\nBoolean c = true;"
        },
        {
            "topic": "Autoboxing and Unboxing",
            "code": "Integer x = 10; // autoboxing\nint y = x;      // unboxing"
        },
        {
            "topic": "Control Flow",
            "code": "if(i > 5) {}\nelse {}\n\nfor(int j=0;j<5;j++) {}\n\nwhile(i>0){ i--; }\n\ndo { i++; } while(i<5);"
        },
        {
            "topic": "Switch Expression (Java 14+)",
            "code": "String day = switch(num) {\n    case 1 -> \"Mon\";\n    case 2 -> \"Tue\";\n    default -> \"Unknown\";\n};"
        },
        {
            "topic": "Arrays",
            "code": "int[] arr = {1,2,3};\nint[] arr2 = new int[3];"
        },
        {
            "topic": "Var Keyword (Java 10+)",
            "code": "var list = List.of(1,2,3);"
        },
        {
            "topic": "Methods",
            "code": "static int add(int a, int b) {\n    return a + b;\n}"
        },
        {
            "topic": "Method Overloading",
            "code": "int add(int a,int b){}\ndouble add(double a,double b){}"
        },
        {
            "topic": "Class and Object",
            "code": "class Car {\n    String model;\n    void drive(){ System.out.println(\"Driving\"); }\n}\nCar car = new Car();"
        },
        {
            "topic": "Constructors",
            "code": "class User {\n    String name;\n    User(String name){ this.name = name; }\n}"
        },
        {
            "topic": "Inheritance",
            "code": "class A {}\nclass B extends A {}"
        },
        {
            "topic": "Polymorphism",
            "code": "A obj = new B();"
        },
        {
            "topic": "Method Overriding",
            "code": "class A { void show(){} }\nclass B extends A { void show(){} }"
        },
        {
            "topic": "Encapsulation",
            "code": "class Person {\n    private int age;\n    public int getAge(){ return age; }\n}"
        },
        {
            "topic": "Abstraction",
            "code": "abstract class Shape {\n    abstract double area();\n}"
        },
        {
            "topic": "Interfaces",
            "code": "interface Flyable { void fly(); }\nclass Bird implements Flyable { public void fly(){} }"
        },
        {
            "topic": "Default Interface Methods",
            "code": "interface A {\n    default void show(){ System.out.println(\"A\"); }\n}"
        },
        {
            "topic": "Functional Interface",
            "code": "@FunctionalInterface\ninterface Calc {\n    int add(int a,int b);\n}"
        },
        {
            "topic": "Lambda Expressions",
            "code": "Calc c = (a,b) -> a + b;"
        },
        {
            "topic": "Enum",
            "code": "enum Status { SUCCESS, FAILED, PENDING }"
        },
        {
            "topic": "Static Keyword",
            "code": "static int counter;\nstatic void show(){}"
        },
        {
            "topic": "Final Keyword",
            "code": "final int x = 10;\nfinal class Constants {}\nfinal void method(){}"
        },
        {
            "topic": "Equals vs ==",
            "code": "String a = new String(\"Java\");\nString b = new String(\"Java\");\na.equals(b); // true\na == b;       // false"
        },
        {
            "topic": "HashCode Contract",
            "code": "If a.equals(b) == true then a.hashCode() == b.hashCode()"
        },
        {
            "topic": "Exception Handling",
            "code": "try {\n    int x = 10/0;\n} catch(ArithmeticException e) {\n    e.printStackTrace();\n} finally {\n    System.out.println(\"Done\");\n}"
        },
        {
            "topic": "Checked vs Unchecked",
            "code": "IOException // checked\nNullPointerException // unchecked"
        },
        {
            "topic": "Custom Exception",
            "code": "class MyException extends RuntimeException {}"
        },
        {
            "topic": "Collections Hierarchy",
            "code": "List -> ArrayList, LinkedList\nSet -> HashSet, TreeSet\nMap -> HashMap, TreeMap"
        },
        {
            "topic": "ArrayList",
            "code": "List<String> list = new ArrayList<>();\nlist.add(\"A\");"
        },
        {
            "topic": "HashSet",
            "code": "Set<String> set = new HashSet<>();"
        },
        {
            "topic": "HashMap",
            "code": "Map<String,Integer> map = new HashMap<>();\nmap.put(\"a\",1);"
        },
        {
            "topic": "TreeMap",
            "code": "Map<String,Integer> map = new TreeMap<>();"
        },
        {
            "topic": "Iterator",
            "code": "Iterator<Integer> it = list.iterator();\nwhile(it.hasNext()){\n    it.next();\n}"
        },
        {
            "topic": "Comparable",
            "code": "class User implements Comparable<User> {\n    public int compareTo(User u){ return this.id - u.id; }\n}"
        },
        {
            "topic": "Comparator",
            "code": "Comparator<User> c = (a,b) -> a.id - b.id;"
        },
        {
            "topic": "Streams",
            "code": "list.stream()\n    .filter(x -> x > 10)\n    .map(x -> x * 2)\n    .forEach(System.out::println);"
        },
        {
            "topic": "Collectors",
            "code": "list.stream().collect(Collectors.toList());"
        },
        {
            "topic": "Optional",
            "code": "Optional<String> opt = Optional.of(\"Java\");\nopt.ifPresent(System.out::println);"
        },
        {
            "topic": "Threads",
            "code": "class MyThread extends Thread {\n    public void run(){}\n}"
        },
        {
            "topic": "Runnable",
            "code": "Runnable r = () -> System.out.println(\"Run\");\nnew Thread(r).start();"
        },
        {
            "topic": "Synchronization",
            "code": "synchronized void syncMethod(){}"
        },
        {
            "topic": "ExecutorService",
            "code": "ExecutorService ex = Executors.newFixedThreadPool(2);\nex.submit(() -> {});\nex.shutdown();"
        },
        {
            "topic": "Volatile",
            "code": "volatile boolean running = true;"
        },
        {
            "topic": "Deadlock Example",
            "code": "Thread1 locks A then B\nThread2 locks B then A"
        },
        {
            "topic": "JVM Memory",
            "code": "Heap\nStack\nMetaspace\nProgram Counter\nNative Stack"
        },
        {
            "topic": "Garbage Collection",
            "code": "System.gc(); // suggestion only"
        },
        {
            "topic": "Serialization",
            "code": "class User implements Serializable {}"
        },
        {
            "topic": "Transient Keyword",
            "code": "transient String password;"
        },
        {
            "topic": "Reflection",
            "code": "Class<?> cls = Class.forName(\"MyClass\");\nMethod[] methods = cls.getDeclaredMethods();"
        },
        {
            "topic": "Annotations",
            "code": "@Override\n@Deprecated\n@SuppressWarnings(\"unchecked\")"
        },
        {
            "topic": "Records (Java 16+)",
            "code": "record User(String name, int age) {}"
        },
        {
            "topic": "Sealed Classes (Java 17)",
            "code": "sealed class A permits B, C {}\nfinal class B extends A {}\nfinal class C extends A {}"
        },
        {
            "topic": "Try-with-resources",
            "code": "try(FileInputStream fis = new FileInputStream(\"a.txt\")) {}"
        },
        {
            "topic": "File I/O (NIO)",
            "code": "Files.readAllLines(Path.of(\"file.txt\"));"
        },
        {
            "topic": "Immutability",
            "code": "final class Immutable {\n    private final int x;\n    Immutable(int x){ this.x = x; }\n}"
        },
        {
            "topic": "Common Interview Trap",
            "code": "Integer a = 128;\nInteger b = 128;\nSystem.out.println(a == b); // false"
        }
    ]
};
