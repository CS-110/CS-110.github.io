"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(n),c=r,m=h["".concat(s,".").concat(c)]||h[c]||d[c]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},28:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={author:"Ben Burns",sidebar_position:8},i="Getting Unstuck",l={unversionedId:"getting-unstuck/index",id:"getting-unstuck/index",title:"Getting Unstuck",description:"When coding, we often either",source:"@site/main/guides/getting-unstuck/index.md",sourceDirName:"getting-unstuck",slug:"/getting-unstuck/",permalink:"/guides/getting-unstuck/",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{author:"Ben Burns",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Changing Linter Colors",permalink:"/guides/vscode/linter-colors"},next:{title:"Common Errors",permalink:"/guides/common-errors"}},s={},u=[{value:"How to start",id:"how-to-start",level:2},{value:"Example",id:"example",level:3},{value:"Asking for help",id:"asking-for-help",level:3},{value:"Stuck in the Middle",id:"stuck-in-the-middle",level:2},{value:"Compilation Problems",id:"compilation-problems",level:2},{value:"Unexpected Errors",id:"unexpected-errors",level:2},{value:"More complicated errors",id:"more-complicated-errors",level:3},{value:"Conditional Errors",id:"conditional-errors",level:3},{value:"Unexpected Output",id:"unexpected-output",level:2},{value:"Manual Debugging",id:"manual-debugging",level:3},{value:"Print Debugging",id:"print-debugging",level:3},{value:"The Debugger",id:"the-debugger",level:3},{value:"Print Debugging vs the Debugger",id:"print-debugging-vs-the-debugger",level:3},{value:"Unit Tests",id:"unit-tests",level:3}],p={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-unstuck"},"Getting Unstuck"),(0,r.kt)("p",null,"When coding, we often either"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get stuck in the middle of coding a particular section, without knowing how to proceed"),(0,r.kt)("li",{parentName:"ul"},"Don't even know how or where to start")),(0,r.kt)("p",null,"Even once we're done with a section, there are three main ways something can go wrong:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The code isn't doesn't compile or interpret successfully"),(0,r.kt)("li",{parentName:"ul"},"The code compiles, but an error is produced while it's running"),(0,r.kt)("li",{parentName:"ul"},"The code compiles and runs, but doesn't do what we want it to ")),(0,r.kt)("p",null,"In any case, it can be hard to determine where our problem is or even where to start when making a fix.\nThis isn't something that goes away! It's something we continuously learn to manage as programmers."),(0,r.kt)("p",null,"This guide serves to help you get unstuck. "),(0,r.kt)("h2",{id:"how-to-start"},"How to start"),(0,r.kt)("p",null,"Sometimes the hardest part of coding, especially when we're learning a language for the first time, is figuring out where to even start. There are two main steps to writing successful code: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Developing an algorithm to solve the problem"),(0,r.kt)("li",{parentName:"ol"},"Figuring out how to code our algorithm")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's say I give you three numbers, and ask you which of the three is the smallest. For example, I give you the numbers ",(0,r.kt)("inlineCode",{parentName:"p"},"[3,7,1]"),", and you need to determine somehow that 1 is the smallest. "),(0,r.kt)("p",null,"First, we develop an algorithm: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compare the first two numbers, and keep the smaller of the two. "),(0,r.kt)("li",{parentName:"ol"},"Compare the two remaining numbers, and tell me the smaller of the two. ")),(0,r.kt)("p",null,"With our ",(0,r.kt)("inlineCode",{parentName:"p"},"[3,7,1]"),' example, we first compare 3 and 7. 3 is smaller, so we throw out 7. Then we compare 3 and 1, and say "1 is smallest."'),(0,r.kt)("p",null,"Now that we've developed an algorithm, we just have to translate our algorithm into Python code. The easiest way to do this is to take the algorithm you've written, and put it in your source file as comments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# 1. Compare the first two numbers, and keep the smaller of the two. \n# 2. Compare the two remaining numbers, and tell me the smaller of the two.\n")),(0,r.kt)("p",null,"and then writing our code in between the comments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# 1. Compare the first two numbers, and keep the smaller of the two. \nsmaller = min(number1, number2)\n# 2. Compare the two remaining numbers, and tell me the smaller of the two.\nour_min = min(smaller, number3)\nprint(f'{our_min} is smallest.')\n")),(0,r.kt)("h3",{id:"asking-for-help"},"Asking for help"),(0,r.kt)("p",null,"If you are stuck with how to start, "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Identify which step you are having trouble with. Are you having trouble figuring out how to solve the problem, or are you stuck on how to translate your algorithm into source code. "),(0,r.kt)("li",{parentName:"ol"},"Formulate a specific question about what you need help with"),(0,r.kt)("li",{parentName:"ol"},"Make a Piazza post, or ask for help in Office Hours")),(0,r.kt)("p",null,'Step 2 is by far the most helpful for us. If you say "I am stuck on Todo 2", we have to essentially walk you through this process to figure out how to help you. Questions we\'d love to answer are'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I'm having trouble with developing an algorithm to solve Todo 2, specifically with ",(0,r.kt)("inlineCode",{parentName:"li"},"x"),"."),(0,r.kt)("li",{parentName:"ul"},"I know how to solve Todo 3, but I'm having trouble converting this step of my algorithm into Python code.")),(0,r.kt)("h2",{id:"stuck-in-the-middle"},"Stuck in the Middle"),(0,r.kt)("p",null,"If you get stuck in the middle of coding a section, there are often two things that can be causing the block:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You aren't sure what the next step in your algorithm is "),(0,r.kt)("li",{parentName:"ol"},"You aren't sure how to convert the next step of your algorithm into code")),(0,r.kt)("p",null,"If you're finding yourself stuck because you don't know the next step in your algorithm, take a break from coding and try to write out your entire algorithm. Psuedocode and control-flow diagrams are both very useful in outlining your full algorithm. In either case, if you're still stuck, see the ",(0,r.kt)("a",{parentName:"p",href:"#asking-for-help"},"Asking for Help")," section above. "),(0,r.kt)("p",null,"Another reason you can get stuck in the middle of a section is that you have come up with a solution, but are stuck on how to write an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"efficient")),' or "clean" solution.\nOur suggestion here is that you either'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Finish your current implementation, and then go back and tidy up specific sections."),(0,r.kt)("li",{parentName:"ol"},"Restart entirely. Run through your algorithm top to bottom before you start to code anything, and look for things you can fix. ")),(0,r.kt)("p",null,"The first suggestion often works better if your algorithm is solid, but you weren't quite sure the best way to implement one part of the algorithm.\nThe second suggestion is better for cleaning up an inefficient algorithm. "),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is not something that goes away! Even as advanced programmers, we will get halfway through coding a section, and think "),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Well, I know how I can finish this function, but it's going to end up really messy. Do I restart, or will this be manageable to tidy up later?")),(0,r.kt)("p",{parentName:"admonition"},"This is a balancing act that you will get better at handling the more complicated problems you tackle.")),(0,r.kt)("h2",{id:"compilation-problems"},"Compilation Problems"),(0,r.kt)("p",null,"Once we're done coding, there are two main types of errors we can get, "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compilation or interpretation errors: the source code we've written isn't valid Python"),(0,r.kt)("li",{parentName:"ul"},"Runtime errors: our source code is valid, but the code performs an unexpected action while running")),(0,r.kt)("p",null,"In VSCode for Python, there is a program called the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/python/linting"},"linter"),".\nThe linter reads through our code, looking for syntax or style issues."),(0,r.kt)("p",null,"How to fix a problem detected by the linter will obviously depend on the problem, but the linter broadly categorizes problems.\nVSCode will display issues detected by the linter by drawing a squiggly line under the problematic code segment.\nThe color of the squiggly line will change depending on what type of problem was detected:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A red underline signifies an error. The linter will produce an error if thinks there is a bug in your code. "),(0,r.kt)("li",{parentName:"ul"},"A green underline signifies a warning. Warnings mostly appear under functions names we have misspelled, under variables we declare and never use, or under variables we attempt to use before they are declared."),(0,r.kt)("li",{parentName:"ul"},'A blue underline signifies information. In python, this usually means the code segment will run fine, but is bad practice, or is "old" python.')),(0,r.kt)("p",null,"In any case, if you hover over the underlined code, the error, warning, or information message will appear, often times indicating what you need to fix:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:n(4480).Z,alt:"Example warning message"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"What your linter considers an error, warning, or information will depend on what linter you install. Find more information on linter messages ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/python/linting#_pylint"},"here"),". The VSCode Python extension uses Pylint by default.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The underline colors listed above are the ",(0,r.kt)("strong",{parentName:"p"},"default")," colors. Your theme may change the color of the underlines. "),(0,r.kt)("p",{parentName:"admonition"},"If you are red-green or green-red color deficient, I highly recommend changing your warning underline color from green to a different color. I use yellow. For a guide on how to do change your warning colors, see the ",(0,r.kt)("a",{parentName:"p",href:"vscode/linter-colors"},"Change Linter Colors")," guide.")),(0,r.kt)("h2",{id:"unexpected-errors"},"Unexpected Errors"),(0,r.kt)("p",null,"Although the linter will detect many errors, there are some errors that the linter will not detect (at least by default)."),(0,r.kt)("p",null,"For example, say we have the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='example.py'",title:"'example.py'"},'text = input("What would you like to type?\\n")\nthird_character = text[2]\nprint(third_character)\n')),(0,r.kt)("p",null,"First, we get some input string, and store it in ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),". Then, we get the character at index 2 of ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," (the third character), and store it in ",(0,r.kt)("inlineCode",{parentName:"p"},"third_character"),". Finally, we print ",(0,r.kt)("inlineCode",{parentName:"p"},"third_character")," out. "),(0,r.kt)("p",null,"As written, this code will result in zero messages from the linter. However, this doesn't mean nothing can go wrong. What if I just say ",(0,r.kt)("inlineCode",{parentName:"p"},"Hi"),"? There's only two characters, so happens when we try to access the third character? In Python, we will get the following message back:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Traceback (most recent call last):\n  File "/path/to/example.py", line 2, in <module>\n    third_character = text[2]\n                      ~~~~^^^\nIndexError: string index out of range\n')),(0,r.kt)("p",null,"This is an ",(0,r.kt)("strong",{parentName:"p"},"error message"),". This is essentially Python's way of saying, \"Something unexpected just happened, here's the problem we identified and what we were doing when it happened.\" More specifically this is what's called a ",(0,r.kt)("strong",{parentName:"p"},"traceback"),': Python has "traced back" it\'s steps to figure out:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What happened?"),(0,r.kt)("li",{parentName:"ol"},"Where are we? What file are we in, and on what line? Are we in a function call?"),(0,r.kt)("li",{parentName:"ol"},"What steps did we take to get here? Did we make multiple nested function calls? If so, what function calls did we make?")),(0,r.kt)("p",null,"The first line of the error message should always read"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Traceback (most recent call last):\n")),(0,r.kt)("p",null,"This line identifies an error occurred, and tells us that, if the error lists multiple function calls, the most recent function call is listed last (in other words, the problem happened in the last line listed). "),(0,r.kt)("p",null,"Next we have a series of code snippets of the form"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  File "/path/to/example.py", line 2, in <module>\n    third_character = text[2]\n                      ~~~~^^^\n')),(0,r.kt)("p",null,"Each of these snippets lists"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The snippet itself, in this case ",(0,r.kt)("inlineCode",{parentName:"li"},"third_character = text[2]")),(0,r.kt)("li",{parentName:"ol"},"Where the code lives, ",(0,r.kt)("inlineCode",{parentName:"li"},'File "/path/to/example.py"'),", and on what line, ",(0,r.kt)("inlineCode",{parentName:"li"},"line 2")),(0,r.kt)("li",{parentName:"ol"},"If the snippet is in a function, denoted as ",(0,r.kt)("inlineCode",{parentName:"li"},"in function_name"),", or not in a function, denoted as ",(0,r.kt)("inlineCode",{parentName:"li"},"in <module>"),'. Code not written in a function is sometimes called "top-level" code.')),(0,r.kt)("p",null,"In this instance, the error message also tells us that the error is specifically in the attempt to access ",(0,r.kt)("inlineCode",{parentName:"p"},"text[2]"),", and not in the assignment of ",(0,r.kt)("inlineCode",{parentName:"p"},"text[2]")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"third_character"),'. In this case, we\'d say that "line 2 throws an error", or "accessing ',(0,r.kt)("inlineCode",{parentName:"p"},"text[2]"),' throws an error."'),(0,r.kt)("p",null,"Finally, the error message will list the name of the specific error that occurred. In this case, we have "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"IndexError: string index out of range\n")),(0,r.kt)("p",null,"which indicates that we're attempted to access the element of ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," at an index that doesn't exist. "),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./common-errors"},"Common Errors guide")," for tips on how to approach various specific errors. "),(0,r.kt)("h3",{id:"more-complicated-errors"},"More complicated errors"),(0,r.kt)("p",null,"With more complicated code, your error might have multiple successive snippets listed. For example, if we make a function call, and then the error occurs inside the function call, like in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='print-name.py'",title:"'print-name.py'"},"def print_name(name):\n    print('My name is ' + my_name)\n\nprint_name('John')\n")),(0,r.kt)("p",null,"Python will print out the location of each nested function call made, then the location of the code snippet where the problem happened. In this instance we get the following error message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Traceback (most recent call last):\n  File \"/path/to/print-name.py\", line 4, in <module>\n    print_name('John')\n  File \"/path/to/print-name.py\", line 2, in print_name\n    print('My name is ' + my_name)\n                          ^^^^^^^\nNameError: name 'my_name' is not defined\n")),(0,r.kt)("p",null,"There are two snippets: first the function call ",(0,r.kt)("inlineCode",{parentName:"p"},"print_name('John')"),", which is listed as ",(0,r.kt)("inlineCode",{parentName:"p"},"in <module>"),' since it\'s "top-level" code, and then inside the function call we have ',(0,r.kt)("inlineCode",{parentName:"p"},"print('My name is ' + my_name)"),", which is in a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"print_name")," function, so it is listed as ",(0,r.kt)("inlineCode",{parentName:"p"},"in print_name"),"."),(0,r.kt)("p",null,"This gives us a sense of what the function call stack looked like at the time of the error, since each successive snippet is a nested function call, with the last line being where the error occurred. "),(0,r.kt)("h3",{id:"conditional-errors"},"Conditional Errors"),(0,r.kt)("p",null,"It's possible that you sometimes get an error when you run your program, but not always. In our first example, giving an input of 3 characters or more will not cause an error, because there would be a third character to access. However, sometimes our program will return an error, like when we input ",(0,r.kt)("inlineCode",{parentName:"p"},"Hi"),". "),(0,r.kt)("p",null,"If you only get an error sometimes, but not always, you should figure out"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Is the error always in the same place?"),(0,r.kt)("li",{parentName:"ol"},"Is it always the same error message?"),(0,r.kt)("li",{parentName:"ol"},"Is the code snippet using some sort of user input?")),(0,r.kt)("p",null,"Probably the most common error to get sometimes, but not always, is an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexError"),", especially if you're accessing an index of user input. Say we're assuming that a user is going to give us a four digit binary number, and we want to check if the one's digit is less than 6. A bad way to check this would be "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'number = input("What 4-digit number would you like to check?\\n")\ndigit = int(number[3])\nprint(digit < 6)\n')),(0,r.kt)("p",null,"Why is this bad? Well, what happens if the user gives us a three digit number? ",(0,r.kt)("inlineCode",{parentName:"p"},"number[3]")," will throw an ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexError"),"."),(0,r.kt)("p",null,"If you don't always get the same error, or the error isn't always in the same place, you likely have multiple errors. It's possible that one of them always happens, and the other only happens sometimes, but happens before we get to the error that is always there. "),(0,r.kt)("h2",{id:"unexpected-output"},"Unexpected Output"),(0,r.kt)("p",null,"Say our code has run without any error, but the code isn't doing what we want it to. For example, your program runs successfully, but prints the wrong thing. This is where we largely get into the realm of ",(0,r.kt)("strong",{parentName:"p"},"debugging"),". Getting rid of error messages is also debugging, but it can be much easier to guess what might be going wrong from an error message than it is from an incorrect, but error-free output."),(0,r.kt)("p",null,"There are four main ways of debugging:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Rereading your source code and looking for bugs"),(0,r.kt)("li",{parentName:"ol"},"Putting print statements in various places to check values of variables or what parts of your code are/aren't being executed"),(0,r.kt)("li",{parentName:"ol"},"Using the debugger"),(0,r.kt)("li",{parentName:"ol"},"Writing unit tests")),(0,r.kt)("h3",{id:"manual-debugging"},"Manual Debugging"),(0,r.kt)("p",null,"Rereading your source code is probably the easiest way to find small errors, so it's highly recommended in the beginning when your code is short. The main downside of this is that, if you've been coding for 2+ hours straight, it's often hard to look for errors in the code you've been staring. If you've ever written a paper and come back the next day to find lots of grammatical or spelling errors, this is the same idea. It can get hard to spot errors in code you've spent a lot of time looking at."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Take a break before you start debugging. Seriously. If you've been coding for a couple hours straight, implementing your algorithm and getting rid of error messages, the best thing to do is take a quick, 30 minute break and come back to it, ",(0,r.kt)("em",{parentName:"p"},"especially if you're under a time crunch"),".")),(0,r.kt)("h3",{id:"print-debugging"},"Print Debugging"),(0,r.kt)("p",null,"Print debugging, sometimes referred to as \"caveman debugging\", is the most brute force approach. It consists of just putting print statements in various parts of your code to check both what parts are/aren't running and values of variables. Print debugging is effective for small projects where you have a good idea of what is going wrong, or finding what region of your code has the problem. However, if you don't quickly find what is wrong,  have a multi-file project where many things could be going wrong, or have multiple underlying problems all at one, print debugging can take a lot of time. You might spend hours changing values of print statements, commenting prints out or back in, and running your code over and over again after each change. "),(0,r.kt)("h3",{id:"the-debugger"},"The Debugger"),(0,r.kt)("p",null,"As the name suggests, the debugger is the most powerful tool for finding bugs in your code. Like how the Python interpreter runs your code line by line, the debugger lets you step through your code's execution line-by-line. As your code runs, the debugger will show you"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What local variables are declared and their values"),(0,r.kt)("li",{parentName:"ol"},"The state of the function call stack"),(0,r.kt)("li",{parentName:"ol"},"Terminal output as it happens")),(0,r.kt)("p",null,"The debugger lets you put break points at specific lines in your code, letting you run the program up to a certain point, and then pausing execution, giving you a snapshot in time of how your program is running. You can also set ",(0,r.kt)("strong",{parentName:"p"},"conditional breakpoints"),', like "stop at this line only if ',(0,r.kt)("inlineCode",{parentName:"p"},"i"),' is 3". For this reason, the debugger is essentially a strictly stronger version of print debugging. '),(0,r.kt)("p",null,"For a tutorial on how to use the debugger in VSCode, see the ",(0,r.kt)("a",{parentName:"p",href:"./vscode/debugger"},"debugger guide"),". "),(0,r.kt)("h3",{id:"print-debugging-vs-the-debugger"},"Print Debugging vs the Debugger"),(0,r.kt)("p",null,"When it comes to choosing between print debugging vs using the debugger, print debugging is useful if you have a good hunch about what is wrong, and just need verification where things are going wrong. "),(0,r.kt)("p",null,'For computer science and informatics students planning on taking more programming languages in the future, we highly suggest you learn to use the debugger now. In less "user-friendly" languages like C, debuggers are objectively more powerful than print debugging for things like picking up segmentation faults. (Aside: these are like Python errors, but instead of immediately giving you the error message and where it happens, C dumps a record of your computer\'s recorded working memory and says "here\'s what went wrong!", which is a ',(0,r.kt)("strong",{parentName:"p"},"lot")," less fun to read. A debugger will just stop where the segfault happened, and show you what all the variables were, without you having to read through the core dump). "),(0,r.kt)("p",null,'We as programmers still use print debugging all the time. But knowing how to use a debugger is an important skill, so we recommend you learn as early as possible, especially while we\'re working with a "user-friendly" language like Python.'),(0,r.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"Say you're writing a calculator app, and you've implemented the following underlying math functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def add(a, b):\n  ...\n\ndef subtract(a, b):\n  ...\n\ndef multiply(a, b):\n  ...\n\ndef divide(a, b):\n  ...\n\ndef exponential(a, b):\n  ...\n")),(0,r.kt)("p",null,"You press all the buttons on your calculator, and expect it to evaluate ",(0,r.kt)("inlineCode",{parentName:"p"},"subtract(add(3, multiply(4, 5)), divide(exponential(10, 2), 2))")," and out the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"(3 + 4 * 5) - (10^2)/2 = -27"),". However, you're calculator gives you a result of ",(0,r.kt)("inlineCode",{parentName:"p"},"-2"),". "),(0,r.kt)("p",null,"How do we know where the problem is? Is it with your calculator buttons? Do the buttons work, but the calculator has an order of operations problem? Is there a problem with one of our math functions?"),(0,r.kt)("p",null,"What we can do is we can write a set of tests for each separate function, where we pass it two inputs, and check the output is what we expect. For example, we could call ",(0,r.kt)("inlineCode",{parentName:"p"},"add(2, 3)"),", and then check that it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),". We call these tests ",(0,r.kt)("strong",{parentName:"p"},"unit tests"),", they're a series of tests that make sure the building blocks of our program work in isolation. The idea is that, if we know each of our functions work in isolation, then the problem is in how we call them, or in our algorithm. "),(0,r.kt)("p",null,"In Python, we often use ",(0,r.kt)("inlineCode",{parentName:"p"},"assert")," for unit testing. An example of a set of unit tests for the above code would be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"assert add(2, 3) == 5\nassert add(9, 0) == 9\n\nassert subtract(5, 2) == 3\nassert subtract(2, 9) == -7\n\nassert multiply(5, 2) == 10\nassert multiply(3, 0) == 0\n\nassert divide(9, 1) == 9.0\nassert divide(10, 2) == 5.0\n\nassert exponential(4, 2) == 16\nassert exponential(2, 5) == 32\n")),(0,r.kt)("p",null,"You want your unit tests to cover all inputs. For example, here we'd want to check that our functions all work how we'd expect with positive numbers, negative numbers, floats, and any special cases like 0 for divide and exponential. "),(0,r.kt)("p",null,"Unit tests often work best in tandem with another debugging technique. For example, if all of these pass, we can assume that our math functions work, and that our problem is actually that we're using our functions improperly. So we boot up the debugger, and pin down that the problem is in the order of operations conversion section (the example I gave does ",(0,r.kt)("inlineCode",{parentName:"p"},"(10/2)^2"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"(10^2)/2"),")."),(0,r.kt)("p",null,"Unit test are often the bulk of your grade on programming assignments. We check that all of your functions work how we ask them to, and then once we know all your functions are working test that your project works as a whole after that."))}h.isMDXComponent=!0},4480:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/error-message-82a6a38c1e770f4f486dabc2d3d1ea0f.png"}}]);