"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4988],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),c=o,h=d["".concat(l,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30257:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i="Lab 08: Modules and Exceptions",s={unversionedId:"modules-exceptions/index",id:"modules-exceptions/index",title:"Lab 08: Modules and Exceptions",description:"Overview",source:"@site/main/labs/08-modules-exceptions/index.md",sourceDirName:"08-modules-exceptions",slug:"/modules-exceptions/",permalink:"/main/labs/modules-exceptions/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab 07: Sets and Dictionaries",permalink:"/main/labs/sets-dicts/"},next:{title:"Lab 09: Files",permalink:"/main/labs/files/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Learning Objectives",id:"learning-objectives",level:2},{value:"How big is this lab?",id:"how-big-is-this-lab",level:2},{value:"Preamble",id:"preamble",level:2},{value:"Assignment",id:"assignment",level:2},{value:"1. Documentation (2 points)",id:"1-documentation-2-points",level:3},{value:"1.1 Use the following documentation",id:"11-use-the-following-documentation",level:4},{value:"1.2 Discuss with your team how to use the try-except block to capture the ZeroDivisionError and ValueError exceptions",id:"12-discuss-with-your-team-how-to-use-the-try-except-block-to-capture-the-zerodivisionerror-and-valueerror-exceptions",level:4},{value:"1.3 Provide two code examples that capture ZeroDivisionError and ValueError exceptions",id:"13-provide-two-code-examples-that-capture-zerodivisionerror-and-valueerror-exceptions",level:4},{value:"2. Exceptions (2 points)",id:"2-exceptions-2-points",level:3},{value:"2.1 Work with your team and write an algorithm to solve the problem. Decompose the problem in at least six steps",id:"21-work-with-your-team-and-write-an-algorithm-to-solve-the-problem-decompose-the-problem-in-at-least-six-steps",level:4},{value:"2.2 Implement your algorithm in Python",id:"22-implement-your-algorithm-in-python",level:4},{value:"3. Modules (2 points)",id:"3-modules-2-points",level:3},{value:"3.1 Work with your team and write an algorithm to solve the problem. Decompose the problem in at least nine steps",id:"31-work-with-your-team-and-write-an-algorithm-to-solve-the-problem-decompose-the-problem-in-at-least-nine-steps",level:4},{value:"3.2 Implement your algorithm in Python",id:"32-implement-your-algorithm-in-python",level:4},{value:"Grading Scale",id:"grading-scale",level:2},{value:"1: Below Standards: 0-1 point",id:"1-below-standards-0-1-point",level:3},{value:"2: Approaching Standards: 2-3 points",id:"2-approaching-standards-2-3-points",level:3},{value:"3: Meeting Standards: 3-4 points",id:"3-meeting-standards-3-4-points",level:3},{value:"4: Exceeding Standards: &gt;4 points",id:"4-exceeding-standards-4-points",level:3}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-08-modules-and-exceptions"},"Lab 08: Modules and Exceptions"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Modules are an essential part of the Python programming language as they provide a way to organize and reuse code. A module is a file containing Python code that defines functions, classes, variables, and other objects that can be reused in different programs. "),(0,o.kt)("p",null,"Here are some of the reasons why modules are important in Python:"),(0,o.kt)("ol",{type:"a"},(0,o.kt)("li",null," Code Reusability: Modules allow developers to write code once and use it multiple times in different programs. This saves time and effort and makes the development process more efficient. "),(0,o.kt)("li",null," Organization: Modules allow developers to organize their code into logical units, making it easier to read and understand. "),(0,o.kt)("li",null," Modularity: Modules allow developers to break down complex programs into smaller, more manageable pieces, making it easier to debug and test. "),(0,o.kt)("li",null," Extensibility: Python comes with a large number of built-in modules and libraries that provide a wide range of functionalities. Additionally, third-party modules can be easily installed and used to extend the capabilities of Python. ")),(0,o.kt)("p",null,"On the other hand, exceptions are an important part of programming in general because they allow developers to handle unexpected and exceptional situations that may occur during program execution. Exceptions provide a way for programs to recover from errors, continue execution, and provide meaningful feedback to the user about the cause of the error."),(0,o.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,o.kt)("p",null,"Upon completion of this lab, you will be able to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read documentation "),(0,o.kt)("li",{parentName:"ol"},"Implement exception handling"),(0,o.kt)("li",{parentName:"ol"},"Understand the try catch finally statement"),(0,o.kt)("li",{parentName:"ol"},"Describe and create modules in python"),(0,o.kt)("li",{parentName:"ol"},"Work with the built-in Python modules")),(0,o.kt)("h2",{id:"how-big-is-this-lab"},"How big is this lab?"),(0,o.kt)("p",null,"There are ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"3")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"3")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"3")))))," questions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One question is to discussion with your peers."),(0,o.kt)("li",{parentName:"ul"},"Second question is to use exceptions as safe guard."),(0,o.kt)("li",{parentName:"ul"},"Third question is to create your own module.")),(0,o.kt)("h2",{id:"preamble"},"Preamble"),(0,o.kt)("p",null,"Errors happen and things go wrong. In lecture ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"13")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"13")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"13"))))),", different types of errors and exceptions were covered."),(0,o.kt)("p",null,"For example, doing the followings might lead to runtime errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Runtime_error",live_py:!0,title:"Runtime_error"},'user_str = input("Please enter a number:")\nuser_num = float(user_str)\n')),(0,o.kt)("p",null,"The reason is that if the user inputs something other than a number such as ",(0,o.kt)("inlineCode",{parentName:"p"},"abc"),", it will not make sense to convert ",(0,o.kt)("inlineCode",{parentName:"p"},"abc")," to a decimal number. The result will lead to a crash."),(0,o.kt)("p",null,"One way to keep this kind of runtime error from happening is to use safeguard such as ",(0,o.kt)("inlineCode",{parentName:"p"},"try"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"except"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"else"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Try_except_else",live_py:!0,title:"Try_except_else"},'while True:\n  try:\n    user_str = input("Please enter a number:")\n    user_num = float(user_str)\n  except:\n    print("Illegal input recieved")\n  else:\n    break\nprint(f"user_num set to {user_num}")\n')),(0,o.kt)("p",null,"The above block of codes will keep prompting the user as long as the input is not a number - and print out an error from the ",(0,o.kt)("inlineCode",{parentName:"p"},"except")," clause. Once an acceptable number is entered and converted into a decimal. The ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," clause will take over and break out of the ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," loop."),(0,o.kt)("p",null,"Now, let's do a refresh on modules. Also covered in lecture ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"13")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"13")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"13"))))),', a module "...is a collection of code you can use." One module you might already be familiar with is ',(0,o.kt)("inlineCode",{parentName:"p"},"math"),". Using ",(0,o.kt)("inlineCode",{parentName:"p"},"math"),", you can do ",(0,o.kt)("inlineCode",{parentName:"p"},"math.log")," etc."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Math_module",live_py:!0,title:"Math_module"},"import math\nx = int(input('Enter a number: '))\nprint(f'Log is {math.log(x)}')\nprint(f'Square root is {math.sqrt(x)}')\nprint(f'Pi is {math.pi}')\n")),(0,o.kt)("p",null,"You can also create your own module. For example, let's create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"mymath.py")," as the followings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="My math module"',title:'"My',math:!0,'module"':!0},'def add(a, b):\n    return a + b\n\ndef sub(a, b):\n    return a - b\n\ndef exp(a, b):\n    return a ** b\n\ndef div(a, b):\n    if b == 0:\n        raise ValueError("Division by zero is not possible.")\n\n    return a / b\n')),(0,o.kt)("p",null,"Let's also create a second file called ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," as the followings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="Use my math module"',title:'"Use',my:!0,math:!0,'module"':!0},'import mymath\n\na = 100\nb = 0\n\nprint("Addition from mymath: ", mymath.add(a, b))\nprint("Subtraction from mymath: ", mymath.sub(a, b))\nprint("Exponent from mymath: ", mymath.exp(a, b))\n')),(0,o.kt)("p",null,"What the above showed is that in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),", I pull in the codes from ",(0,o.kt)("inlineCode",{parentName:"p"},"mymath.py")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),". From there, I could call any of the methods defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"mymath.py")," such as ",(0,o.kt)("inlineCode",{parentName:"p"},".add()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".subtract()")," etc. So using modules, you can organize your codes nicely! Do note that in order for ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," to pull in your codes from ",(0,o.kt)("inlineCode",{parentName:"p"},"mymath.py"),", both files need to be located in the same location or directory for them to find each other."),(0,o.kt)("h2",{id:"assignment"},"Assignment"),(0,o.kt)("p",null,"Let's say you are writing a program that reads data from a file and performs some calculations. One of the calculations involves dividing two numbers read from the file. You don't know what type of data the file may contain characters, so it's possible that you accidently read in two letters and attempt to divide them, leading to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ValueError")," exception. Additionally, it's possible that we successfully read in two numbers, but the denominator we read is a zero, so that when we divide we get a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZeroDivisionError"),". In this lab, you will write an algorithm that handles these exceptions to prevent your program from crashing. "),(0,o.kt)("h3",{id:"1-documentation-2-points"},"1. Documentation (2 points)"),(0,o.kt)("h4",{id:"11-use-the-following-documentation"},"1.1 Use the following documentation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/errors.html"},"https://docs.python.org/3/tutorial/errors.html")," "),(0,o.kt)("h4",{id:"12-discuss-with-your-team-how-to-use-the-try-except-block-to-capture-the-zerodivisionerror-and-valueerror-exceptions"},"1.2 Discuss with your team how to use the try-except block to capture the ZeroDivisionError and ValueError exceptions"),(0,o.kt)("h4",{id:"13-provide-two-code-examples-that-capture-zerodivisionerror-and-valueerror-exceptions"},"1.3 Provide two code examples that capture ZeroDivisionError and ValueError exceptions"),(0,o.kt)("h3",{id:"2-exceptions-2-points"},"2. Exceptions (2 points)"),(0,o.kt)("p",null,'Create a Python script called division.py and write a function called divide(a, b) that takes two arguments, a and b. Use a try block to perform the division a / b. If b is zero, catch the ZeroDivisionError and print "Cannot divide by zero". If a or b is not a number, catch the ValueError and print "Both inputs must be numbers". Return the result if the division is successful. Test the function with different arguments to ensure it raises the correct exceptions.'),(0,o.kt)("h4",{id:"21-work-with-your-team-and-write-an-algorithm-to-solve-the-problem-decompose-the-problem-in-at-least-six-steps"},"2.1 Work with your team and write an algorithm to solve the problem. Decompose the problem in at least six steps"),(0,o.kt)("h4",{id:"22-implement-your-algorithm-in-python"},"2.2 Implement your algorithm in Python"),(0,o.kt)("h3",{id:"3-modules-2-points"},"3. Modules (2 points)"),(0,o.kt)("p",null,"Here, the task is to create a Python script called main.py that contains a function called calculate_sum(numbers). This function takes a list of numbers as an argument and returns the sum of the numbers. The division module created in Part ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mn",{parentName:"mrow"},"2")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},"2")))))," should be imported."),(0,o.kt)("p",null,"In the calculate_sum function, a for loop iterates over the numbers in the list. For each number, the divide function from the division module is called. If an exception is raised, an error message is printed to the console and the next number in the list is processed. If the division is successful, the result is added to a running total."),(0,o.kt)("p",null,"After all the numbers have been processed, the calculate_sum function returns the running total. Testing should be done with different lists of numbers to ensure it handles exceptions properly."),(0,o.kt)("h4",{id:"31-work-with-your-team-and-write-an-algorithm-to-solve-the-problem-decompose-the-problem-in-at-least-nine-steps"},"3.1 Work with your team and write an algorithm to solve the problem. Decompose the problem in at least nine steps"),(0,o.kt)("h4",{id:"32-implement-your-algorithm-in-python"},"3.2 Implement your algorithm in Python"),(0,o.kt)("h2",{id:"grading-scale"},"Grading Scale"),(0,o.kt)("p",null,"Below are how many points translate to what level on the 5-point scale."),(0,o.kt)("h3",{id:"1-below-standards-0-1-point"},"1: Below Standards: 0-1 point"),(0,o.kt)("h3",{id:"2-approaching-standards-2-3-points"},"2: Approaching Standards: 2-3 points"),(0,o.kt)("h3",{id:"3-meeting-standards-3-4-points"},"3: Meeting Standards: 3-4 points"),(0,o.kt)("h3",{id:"4-exceeding-standards-4-points"},"4: Exceeding Standards: >4 points"))}d.isMDXComponent=!0}}]);