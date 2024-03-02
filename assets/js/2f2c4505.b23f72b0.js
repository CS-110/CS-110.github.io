"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),h=l,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:l,s[1]=o;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},37550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(74866),s=n(85162),o=n(22408);const i={},u="Lec 23 GUIs",c={unversionedId:"GUIs/index",id:"GUIs/index",title:"Lec 23 GUIs",description:"Assignment Updates",source:"@site/main/lectures/23_GUIs/index.md",sourceDirName:"23_GUIs",slug:"/GUIs/",permalink:"/main/lectures/GUIs/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Section 04 (Jared Yeager)",permalink:"/main/lectures/Lambdas/Jared/"},next:{title:"Section 04 (Jared Yeager)",permalink:"/main/lectures/GUIs/Jared/"}},p={},d=[{value:"Assignment Updates",id:"assignment-updates",level:2},{value:"Slides",id:"slides",level:2},{value:"Resources",id:"resources",level:2},{value:"Notes",id:"notes",level:2},{value:"Topics",id:"topics",level:3},{value:"GUIs",id:"guis",level:3},{value:"TKinter",id:"tkinter",level:3},{value:"Events",id:"events",level:3},{value:"Stopwatch",id:"stopwatch",level:3}],h={toc:d};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lec-23-guis"},"Lec 23 GUIs"),(0,l.kt)("h2",{id:"assignment-updates"},"Assignment Updates"),(0,l.kt)("p",null,"Stuff due soon:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"HW7 Due 5/15"),(0,l.kt)("li",{parentName:"ul"},"Capstone Project Presentations 5/16 and 5/17")),(0,l.kt)("h2",{id:"slides"},"Slides"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Section 1, 6",label:"Section 1, 6",mdxType:"TabItem"},(0,l.kt)(o.O,{lec_src:n(77845).Z,mdxType:"PowerPoint"})),(0,l.kt)(s.Z,{value:"Section 2, 3, 4, 5",label:"Section 2, 3, 4, 5",default:!0,mdxType:"TabItem"},(0,l.kt)(o.O,{lec_src:n(62985).Z,mdxType:"PowerPoint"}))),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/tkinter.html"},"TKinter Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.tutorialspoint.com/python/python_gui_programming.htm"},"TKinter Tutorial")),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{target:"_blank",href:n(76330).Z},"gui.py"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This code is a simple GUI that displays a label and a button using TKinter"))),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{target:"_blank",href:n(59271).Z},"event.py"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This code has a button that triggers an event when clicked"))),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{target:"_blank",href:n(3964).Z},"stopwatch.py"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This code is a stopwatch that counts up when you click the start button"))),(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{target:"_blank",href:n(30531).Z},"stopwatch_lap.py"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This code is a stopwatch that counts up when you click the start button. It also has a lap button that records the current time and displays it in a list")))),(0,l.kt)("h2",{id:"notes"},"Notes"),(0,l.kt)("h3",{id:"topics"},"Topics"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GUIs"),(0,l.kt)("li",{parentName:"ul"},"Events"),(0,l.kt)("li",{parentName:"ul"},"TKinter")),(0,l.kt)("h3",{id:"guis"},"GUIs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GUI = Graphical User Interface",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A GUI is a program that has a window with buttons, text boxes, etc."),(0,l.kt)("li",{parentName:"ul"},"Example: A web browser is a GUI")))),(0,l.kt)("h3",{id:"tkinter"},"TKinter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TKinter is a Python library for creating GUIs"),(0,l.kt)("li",{parentName:"ul"},"We can use TKinter to create a GUI",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"We can create a window"),(0,l.kt)("li",{parentName:"ul"},"We can add buttons to the window"),(0,l.kt)("li",{parentName:"ul"},"We can add text boxes to the window"),(0,l.kt)("li",{parentName:"ul"},"We can add other widgets to the window"))),(0,l.kt)("li",{parentName:"ul"},"How do we do this?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"First, we need to import the TKinter library"),(0,l.kt)("li",{parentName:"ul"},"Then, we need to create a window"),(0,l.kt)("li",{parentName:"ul"},"Then, we need to add widgets to the window"),(0,l.kt)("li",{parentName:"ul"},"Finally, we need to start the main loop",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The main loop is a loop that runs forever"))))),(0,l.kt)("li",{parentName:"ul"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from tkinter import Tk, Label, Button\n\n# Create the main window: 400x250 pixels, titled \'My App\'\nwindow = Tk()\nwindow.title("My App")\nwindow.geometry("400x250")\n\nbutton = Button(\n    text="Click Me!", # Text to display on the button\n    width=25, # Width \n    height=5, # Height \n    bg="blue", # Button color\n    fg="yellow", # Text color\n)\n\n# adds the button to the window\nbutton.place(x=180, y=100)\n\nlabel = Label(\n    text="Hello World!", # Text to display\n    font=("Arial", 24, "bold") # Font (font, size, style)\n)\n\n# Adds the label to the window\nlabel.place(x=180, y=50)\n\n# Starts the GUI\nwindow.mainloop()\n')),(0,l.kt)("h3",{id:"events"},"Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On a GUI, when you click a button, something happens",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Currently, we write code that immediately executes"),(0,l.kt)("li",{parentName:"ul"},"How do we write code that executes when something happens?"))),(0,l.kt)("li",{parentName:"ul"},"We can do this with events",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"An event is something that happens",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Clicking a button is an event"),(0,l.kt)("li",{parentName:"ul"},"Pressing a key is an event"))),(0,l.kt)("li",{parentName:"ul"},"We can write code that executes when an event happens",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The code that executes when an event happens is called an event handler"),(0,l.kt)("li",{parentName:"ul"},"Examples:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Code that executes when a button is clicked"),(0,l.kt)("li",{parentName:"ul"},"Code that executes when a key is pressed"))))))),(0,l.kt)("li",{parentName:"ul"},"How do we do this?",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"First, we need an way to create an event",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Example: A button that can be clicked"))),(0,l.kt)("li",{parentName:"ul"},"Then, we need to write code that executes when the event happens",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This is the event handler"),(0,l.kt)("li",{parentName:"ul"},"Example: A print statement that prints 'Button clicked'"))))),(0,l.kt)("li",{parentName:"ul"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from tkinter import Tk, Button\n\n# Create the main window: 400x250 pixels, titled 'A Button', white background\nws = Tk()\nws.geometry('400x250')\nws.title('A Button')\nws.config(bg='#ffffff')\n\n# A function that prints 'Button clicked' to the console\ndef button_clicked():\n    print('Button clicked')\n    \n# Create a button that calls the button_clicked function when clicked\n# In this case, the event of clicking the button is handled by the \n# button_clicked function\nbtn = Button(ws, text='Click Me!', command=button_clicked)\n\n# Place the button in the main window\nbtn.place(x=180, y=100)\n\n# Starts the GUI and listens for events\nws.mainloop()\n")),(0,l.kt)("h3",{id:"stopwatch"},"Stopwatch"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We can use events to create a stopwatch",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A stopwatch is a program that counts the number of seconds that have passed"),(0,l.kt)("li",{parentName:"ul"},"It has a start button, a stop button, and a reset button"),(0,l.kt)("li",{parentName:"ul"},"When the start button is clicked, the stopwatch starts counting"),(0,l.kt)("li",{parentName:"ul"},"When the stop button is clicked, the stopwatch stops counting"),(0,l.kt)("li",{parentName:"ul"},"When the reset button is clicked, the stopwatch resets to 0"))),(0,l.kt)("li",{parentName:"ul"},"Example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from tkinter import Tk, Label, Button\n\nclass Stopwatch:\n    \"\"\"A simple stopwatch GUI app.\"\"\"  \n      \n    def __init__(self):\n        # Sets the background color of the main window (to white)\n        BACKGROUND = '#ffffff'\n        \n        # Create the main window: 400x250 pixels, titled 'Stopwatch'\n        ws = Tk()\n        ws.geometry('400x250')\n        ws.title('Stopwatch')\n        ws.config(bg=BACKGROUND)\n        ws.resizable(False, False)\n\n        # Lbl is the label that displays the count\n        lbl = Label(ws, text=\"00:00\", fg=\"black\",\n                    bg=BACKGROUND, font=\"Verdana 40 bold\")\n        \n        # start_btn is the button that starts the stopwatch\n        start_btn = Button(ws, text='Start', width=15, command=self.StartTimer)\n        \n        # stop_btn is the button that stops the stopwatch\n        stop_btn = Button(ws, text='Stop', width=15,\n                          state='disabled', command=self.StopTimer)\n        \n        # reset_btn is the button that resets the stopwatch\n        reset_btn = Button(ws, text='Reset', width=15,\n                           state='disabled', command=self.ResetTimer)\n\n        # Moves the buttons and label to the correct position\n        lbl.place(x=120, y=60)\n        start_btn.place(x=30, y=200)\n        stop_btn.place(x=150, y=200)\n        reset_btn.place(x=270, y=200)\n\n        # Count keeps track of the time elapsed\n        self.count = 0\n        # Running keeps track of if the stopwatch is running\n        self.running = None\n        \n        # Elements in the GUI\n        self.ws = ws\n        self.lbl = lbl\n        self.start_btn = start_btn\n        self.stop_btn = stop_btn\n        self.reset_btn = reset_btn\n\n        # Starts the GUI\n        ws.mainloop()\n\n    def Count(self):\n        \"\"\"Adds one second to the count and updates the label. Runs every second.\"\"\"\n        \n        # If the stopwatch is not running, don't do anything        \n        if self.running is None:\n            return\n        \n        # Updates the count and label\n        self.count += 1\n        secs = int(self.count % 60)\n        mins = int(self.count // 60)\n        self.lbl['text'] = f'{mins:02}:{secs:02}'\n        \n        # Sets an event to call Count again after 1 second\n        self.running = self.ws.after(1000, self.Count)\n\n    def StartTimer(self):\n        \"\"\"Starts the stopwatch.\"\"\"\n        \n        # Creates an event to call Count after 1 second        \n        self.running = self.ws.after(1000, self.Count)\n        \n        # Enables and disables the correct buttons\n        self.start_btn['state'] = 'disabled'\n        self.stop_btn['state'] = 'normal'\n        self.reset_btn['state'] = 'normal'\n\n    def StopTimer(self):\n        \"\"\"Stops the stopwatch. Does not reset the count.\"\"\"\n        \n        # Cancels the event calling Count\n        self.running = self.ws.after_cancel(self.running)\n        \n        # Enables and disables the correct buttons\n        self.start_btn['state'] = 'normal'\n        self.stop_btn['state'] = 'disabled'\n        self.reset_btn['state'] = 'normal'\n\n    def ResetTimer(self):\n        \"\"\"Resets the stopwatch. Also stops the stopwatch.\"\"\"    \n        \n        # Cancels the event calling Count and resets the count    \n        self.running = None\n        self.count = 0\n        \n        # Resets the label and enables/disables the correct buttons\n        self.lbl['text'] = '00:00'\n        self.start_btn['state'] = 'normal'\n        self.stop_btn['state'] = 'disabled'\n        self.reset_btn['state'] = 'disabled'\n\n# Creates the stopwatch\nStopwatch()\n")))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.default)(r,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),r=n(86010),s=n(12466),o=n(16550),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function d(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[s,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),b=(()=>{const e=i??p;return h({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=n(72389);const k="tabList__CuJ",w="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},s,{className:(0,r.default)("tabs__item",w,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return l.createElement("div",{className:(0,r.default)("tabs-container",k)},l.createElement(g,(0,a.Z)({},e,t)),l.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return l.createElement(y,(0,a.Z)({key:String(t)},e))}},22408:(e,t,n)=>{n.d(t,{O:()=>r});var a=n(67294),l=n(52263);const r=e=>{let{lec_src:t}=e;const n=`https://view.officeapps.live.com/op/embed.aspx?src=${(0,l.Z)().siteConfig.url+t}`;return a.createElement("div",{style:{marginBottom:"4rem"}},a.createElement("iframe",{src:n,width:"100%",height:"600px",frameborder:"0"}),a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},62985:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Lecture_23-569d5b380c66600e7420060d173302c5.pptx"},77845:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Lecture_23_Cole-1d638209d68a07f8e4337fa41b041c82.pptx"},59271:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/event-05a8d90c4e65f50d12a2972c02bb505e.py"},76330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/gui-4e9189fdab575b9d200e39a7e924ac36.py"},3964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/stopwatch-f1c3ca9c36c9031ec4e3499e2d13aadd.py"},30531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/stopwatch_lap-a94f753a93e47d8350fbd8f92c06d488.py"}}]);