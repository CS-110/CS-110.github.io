"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>_});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,_=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(_,l(l({ref:t},u),{},{components:n})):i.createElement(_,l({ref:t},u))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Section 04 (Jared Yeager)"},l="Sets and Dictionaries",o={unversionedId:"sets-dicts/Jared/index",id:"sets-dicts/Jared/index",title:"Section 04 (Jared Yeager)",description:"This is mostly going to be a syntax and useful methods dump,",source:"@site/main/lectures/11-sets-dicts/Jared/index.md",sourceDirName:"11-sets-dicts/Jared",slug:"/sets-dicts/Jared/",permalink:"/main/lectures/sets-dicts/Jared/",draft:!1,tags:[],version:"current",frontMatter:{title:"Section 04 (Jared Yeager)"},sidebar:"tutorialSidebar",previous:{title:"Lec 11 Sets and Dictionaries",permalink:"/main/lectures/sets-dicts/"},next:{title:"Lec 12 Looping Patterns",permalink:"/main/lectures/looping-patterns/"}},s={},p=[{value:"What Are Sets and Dictionaries",id:"what-are-sets-and-dictionaries",level:2},{value:"Sets",id:"sets",level:3},{value:"Dictionaries",id:"dictionaries",level:3},{value:"Useful Methods",id:"useful-methods",level:2},{value:"Sets",id:"sets-1",level:3},{value:"Dictionaries",id:"dictionaries-1",level:3},{value:"Conversions",id:"conversions",level:2},{value:"To Sets",id:"to-sets",level:3},{value:"From Sets",id:"from-sets",level:3},{value:"From Dicts",id:"from-dicts",level:3},{value:"To Dicts",id:"to-dicts",level:3},{value:"For Loops",id:"for-loops",level:2},{value:"Deletion (<code>del</code>)",id:"deletion-del",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sets-and-dictionaries"},"Sets and Dictionaries"),(0,a.kt)("p",null,"This is mostly going to be a syntax and useful methods dump,\nwith a bit of the abstract intuition more up-front."),(0,a.kt)("h2",{id:"what-are-sets-and-dictionaries"},"What Are Sets and Dictionaries"),(0,a.kt)("p",null,"We have already learned about some collection types: lists, tuples, and strings.\nThese notably all have some sort of canonical ordering for their elements."),(0,a.kt)("p",null,"Today we will be considering some ",(0,a.kt)("strong",{parentName:"p"},"un-ordered")," collection types."),(0,a.kt)("h3",{id:"sets"},"Sets"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sets")," are a pure collection of ",(0,a.kt)("strong",{parentName:"p"},"unique")," elements. Any given value is either in the set or not."),(0,a.kt)("p",null,"Sets can be declared with squiggly brackets (",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),") with comma-separated values.\nEmpty sets must be created with the ",(0,a.kt)("inlineCode",{parentName:"p"},"set()")," function (",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," alone makes an empty dictionary)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Make_Set",live_py:!0,title:"Make_Set"},'empty_set = set()\nnon_empty_set = {"apple", "banana", "cherry", "durian"}\n\nprint(empty_set)\nprint(non_empty_set)\n')),(0,a.kt)("p",null,"They are un-ordered, and un-indexable.\nAttempts to index a set will lead to an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Index_Set",live_py:!0,title:"Index_Set"},'fruits = {"apple", "banana", "cherry", "durian"}\n\nprint(fruits[0]) # Throws Error\n')),(0,a.kt)("p",null,"The real thing you would do with a set is check membership."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=In_Set",live_py:!0,title:"In_Set"},'fruits = {"apple", "banana", 314, "cherry", "durian", 3.14}\n\nprint("apple" in fruits)     # True\nprint("pineapple" in fruits) # False\n')),(0,a.kt)("h3",{id:"dictionaries"},"Dictionaries"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Dictionaries")," are almost a generalisation of a lists in a way.\nLists are a collection of indexed elements, the indices are 0 to length minus 1 (inclusive).\nThese indices impose a natural ordering on the elements in the list."),(0,a.kt)("p",null,"Dictionaries replace indices with arbitrary ",(0,a.kt)("strong",{parentName:"p"},"unique")," ",(0,a.kt)("em",{parentName:"p"},"keys"),", and these keys map to ",(0,a.kt)("em",{parentName:"p"},"values"),"\n(as opposed to indices mapping to elements.).\nUsing keys to index into the dictionary is what forces them to need to be unique.\nThese keys can be anything, and so there is no clear ordering."),(0,a.kt)("p",null,"This is really useful if you want to track categorical information about something.\nSo a dictionary with information about person maybe has ",(0,a.kt)("inlineCode",{parentName:"p"},'"age"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"height"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"hair colour"'),"\nas keys, for instance."),(0,a.kt)("p",null,"Dictionaries can be declared with squiggly brackets (",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),") with comma-separated ",(0,a.kt)("inlineCode",{parentName:"p"},"key:value")," pairs.\nEmpty dictionaries can be created with via ",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Make_Dict",live_py:!0,title:"Make_Dict"},'empty_dict = {}\nnon_empty_dict = {"apple": "pie", 3: 14, 3.14: "pie"}\n\nprint(empty_dict)\nprint(non_empty_dict)\n')),(0,a.kt)("p",null,"Indexing for a dictionary is visually the same as a list,\n",(0,a.kt)("inlineCode",{parentName:"p"},"dictionary[key]")," will give you the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," associated with that ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Index_Dict",live_py:!0,title:"Index_Dict"},'Jared = {"age": 26, "job": "TO", "height": (6, 1), "hobby": "origami"}\nprint(f"Jared: {Jared}")\nprint(f"Jared[\'age\']: {Jared[\'age\']}")       # 26\nprint(f"Jared[\'job\']: {Jared[\'job\']}")       # TO\nprint(f"Jared[\'height\']: {Jared[\'height\']}") # (6, 1)\nprint(f"Jared[\'hobby\']: {Jared[\'hobby\']}")   # origami\nprint(f"Jared[\'name\']: {Jared[\'name\']}")     # Error!\n')),(0,a.kt)("p",null,"If the key does not exist on an access attempt, and error occurs (setting is fine though).\nThis can be used to retrieve ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"s (as above), update values for a given ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),", and\nmake new ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," and set the associated ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Edit_Dict",live_py:!0,title:"Edit_Dict"},'Jared = {"age": 26, "job": "TO", "height": (6, 1), "hobby": "origami"}\n\n# I haven\'t done origami in a while, should update that\nJared["hobby"] = "video games"\nprint(f"Jared: {Jared}")\n\n# I suppose my NAME is probably relevant, should add that\nJared["first name"] = "Jared"\nJared["last name"] = "Yeager"\nprint(f"Jared: {Jared}")\n')),(0,a.kt)("p",null,"Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"in"),". Checks if a ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a key in the dictionary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=In_Dict",live_py:!0,title:"In_Dict"},'Jared = {"age": 26, "job": "TO", "height": (6, 1), "hobby": "origami"}\nprint("age" in Jared)       # True\nprint(26 in Jared)          # False\nprint(("age", 26) in Jared) # False\n')),(0,a.kt)("h2",{id:"useful-methods"},"Useful Methods"),(0,a.kt)("p",null,"Naturally, the official documentation has the full list of methods for all of these types.\nI want to flag a few that might be useful now so they you know such things exist.\nYou don't need to memorise these, knowing they exist in order\nto be able to look them up in the future is the real goal."),(0,a.kt)("p",null,"Official documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#string-methods"},"strings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/datastructures.html#more-on-lists"},"lists")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#set"},"sets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#mapping-types-dict"},"dictionaries"))),(0,a.kt)("p",null,"Non-official documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_ref_string.asp"},"strings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_ref_list.asp"},"lists")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_ref_tuple.asp"},"tuples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_ref_set.asp"},"sets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.w3schools.com/python/python_ref_dictionary.asp"},"dictionaries"))),(0,a.kt)("h3",{id:"sets-1"},"Sets"),(0,a.kt)("p",null,"Some general methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".add(x)"),": adds ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," to the set"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".discard(x)"),": removes ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," from the set\n(the ",(0,a.kt)("inlineCode",{parentName:"li"},".remove(x)")," method does the same, but throws an error if ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," is not in the set)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".pop()")," removes and returns a random element from the set")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Set_Add",live_py:!0,title:"Set_Add"},'fruits = {"apple", "banana", "orange"}\nprint(f"before: {fruits}")\nfruits.add("grape")\nprint(f"after : {fruits}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Set_Discard",live_py:!0,title:"Set_Discard"},'fruits = {"apple", "banana", "orange"}\nprint(f"before: {fruits}")\nfruits.discard("banana")\nprint(f"after : {fruits}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Set_Pop",live_py:!0,title:"Set_Pop"},'fruits = {"apple", "banana", "orange"}\nprint(f"before: {fruits}")\nfruit = fruits.pop()\nprint(f"after : {fruits}")\nprint(f"popped: {fruit}")\n')),(0,a.kt)("p",null,"Some methods for common set operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".intersection(s)")," returns a set of elements both in the invoking set and ",(0,a.kt)("inlineCode",{parentName:"li"},"s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".union(s)")," returns a set of elements in either the invoking set or ",(0,a.kt)("inlineCode",{parentName:"li"},"s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".difference(s)")," returns a set of elements in the invoking set but not in ",(0,a.kt)("inlineCode",{parentName:"li"},"s")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".symmetric_difference(s)")," returns a set of elements in either the invoking set or ",(0,a.kt)("inlineCode",{parentName:"li"},"s"),", but not both")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Set_Ops",live_py:!0,title:"Set_Ops"},'fruits = {"apple", "banana", "orange"}\ncolours = {"orange", "yellow", "green"}\nprint(f"inter   : {fruits.intersection(colours)}")\nprint(f"union   : {fruits.union(colours)}")\nprint(f"diff    : {fruits.difference(colours)}")\nprint(f"sym diff: {fruits.symmetric_difference(colours)}")\n')),(0,a.kt)("h3",{id:"dictionaries-1"},"Dictionaries"),(0,a.kt)("p",null,"Some general methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".update(d)"),": adds key-value pair from dictionary-like object (iterable with key-value pairs) ",(0,a.kt)("inlineCode",{parentName:"li"},"d")," to the dictionary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".pop(k)")," removes and key-value pair for key ",(0,a.kt)("inlineCode",{parentName:"li"},"k")," and returns the associated value")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dict_Update",live_py:!0,title:"Dict_Update"},'fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}\nprint(fruit_colours)\n# Update with a dict\nfruit_colours.update({"apple": "green", "orange": "orange"})\nprint(fruit_colours)\n# Update with a list of key-value tuples\nfruit_colours.update([("apple", "yellow"), ("grape", "purple")])\nprint(fruit_colours)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dict_Pop",live_py:!0,title:"Dict_Pop"},'fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}\nprint(f"before: {fruit_colours}")\nfruit_color = fruit_colours.pop("apple")\nprint(f"after : {fruit_colours}")\nprint(f"popped: {fruit_color}")\n')),(0,a.kt)("p",null,"Some methods for extracting all keys/values of a dictionary:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".keys()"),": returns an iterable of the keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".values()"),": returns an iterable of the values"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".items()"),": returns an iterable of key-value tuples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dict_Keys",live_py:!0,title:"Dict_Keys"},'fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}\nprint(f"dict: {fruit_colours}")\nprint(f"keys: {fruit_colours.keys()}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dict_Values",live_py:!0,title:"Dict_Values"},'fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}\nprint(f"dict  : {fruit_colours}")\nprint(f"values: {fruit_colours.values()}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dict_Items",live_py:!0,title:"Dict_Items"},'fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}\nprint(f"dict : {fruit_colours}")\nprint(f"items: {fruit_colours.items()}")\n')),(0,a.kt)("h2",{id:"conversions"},"Conversions"),(0,a.kt)("h3",{id:"to-sets"},"To Sets"),(0,a.kt)("p",null,"Conversion from strings, lists, and tuples to sets is a lot like\nconversions to lists/tuples, except duplicates will be lost\n(since sets are collections of unique elements)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_Set",live_py:!0,title:"To_Set"},'str_to_set = set("Hello, World")\nprint(str_to_set)\n\nlist_to_set = set([3, 1, 4, 1, 5])\nprint(list_to_set)\n\ntuple_to_set = set([9, 2, 6, 5, 3, 5])\nprint(tuple_to_set)\n')),(0,a.kt)("h3",{id:"from-sets"},"From Sets"),(0,a.kt)("p",null,"Converting from a set to a list/tuple basically just creates an ordering,\nbut you really have no guarantees about that ordering."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=From_Set_List_Tuple",live_py:!0,title:"From_Set_List_Tuple"},'fruits = {"apple", "orange", "banana"}\nset_to_list = list(fruits)\nprint(set_to_list)\n\nset_to_tuple = tuple(fruits)\nprint(set_to_tuple)\n')),(0,a.kt)("p",null,"You can directly convert to a string,\nbut like with list/tuples to strings, it will just be the printable form.\nYou can use the string ",(0,a.kt)("inlineCode",{parentName:"p"},".join()")," method like with list/tuples,\nbut no ordering guarantees."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=From_Set_String",live_py:!0,title:"From_Set_String"},'fruits = {"apple", "orange", "banana"}\nset_to_string = str(fruits)\nprint(set_to_string)\n\n# Only works if all keys are strings\nset_to_string = " ".join(fruits)\nprint(set_to_string)\n')),(0,a.kt)("h3",{id:"from-dicts"},"From Dicts"),(0,a.kt)("p",null,"Converting from a dict to almost anything else is like the values don't exist.\nIteration is done purely over the keys for dicts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=From_Dict",live_py:!0,title:"From_Dict"},'fruits = {"apple": "red", "orange": "orange", "banana": "yellow"}\ndict_to_set = set(fruits)\nprint(dict_to_set)\n\ndict_to_list = list(fruits)\nprint(dict_to_list)\n\ndict_to_tuple = tuple(fruits)\nprint(dict_to_tuple)\n\ndict_to_string = str(fruits)\nprint(dict_to_string)\n\n# Only works if all keys are strings\ndict_to_string = " ".join(fruits)\nprint(dict_to_string)\n')),(0,a.kt)("p",null,"If you explicitly want the key-value pairs, you may want to convert\nthe iterable returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},".items()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=From_Dict_Items",live_py:!0,title:"From_Dict_Items"},'fruits = {"apple": "red", "orange": "orange", "banana": "yellow"}\nfruit_kv_pairs = fruits.items()\n\ndict_to_set = set(fruit_kv_pairs)\nprint(dict_to_set)\n\ndict_to_list = list(fruit_kv_pairs)\nprint(dict_to_list)\n\ndict_to_tuple = tuple(fruit_kv_pairs)\nprint(dict_to_tuple)\n\ndict_to_string = str(fruit_kv_pairs)\nprint(dict_to_string)\n\n# dict_items is an iterable of tuples (not strings), so .join() fails\ndict_to_string = " ".join(fruit_kv_pairs)\nprint(dict_to_string)\n')),(0,a.kt)("h3",{id:"to-dicts"},"To Dicts"),(0,a.kt)("p",null,"Converting ",(0,a.kt)("strong",{parentName:"p"},"to")," a dictionary basically requires a set/list/tuple of key-value pairs\n(stings can't be element-wise paired like this)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_Dict",live_py:!0,title:"To_Dict"},"fruits = {\"apple\": \"red\", \"orange\": \"orange\", \"banana\": \"yellow\"}\nset_to_dict = dict({('apple', 'red'), ('banana', 'yellow'), ('orange', 'orange')})\nprint(set_to_dict)\n\nlist_to_dict = dict([('apple', 'red'), ('banana', 'yellow'), ('orange', 'orange')])\nprint(list_to_dict)\n\ntuple_to_dict = dict((('apple', 'red'), ('banana', 'yellow'), ('orange', 'orange')))\nprint(tuple_to_dict)\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Extra: Zips")),(0,a.kt)("p",null,"You might imagine a case where you have a collection of keys and a collection of values,\nand want to turn them into a dictionary.\nYou would first need to bundle the key and value elements together into pairs\nbefore ",(0,a.kt)("inlineCode",{parentName:"p"},"dict()")," can work. This is exactly what ",(0,a.kt)("inlineCode",{parentName:"p"},"zip()")," does."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_Dict_Zip_List_Tuple",live_py:!0,title:"To_Dict_Zip_List_Tuple"},'k = ["apple", "orange", "banana"]\nv = ["red", "orange", "yellow"]\nlists_to_dict = dict(zip(k, v))\nprint(lists_to_dict)\n\nk = ("apple", "orange", "banana")\nv = ("red", "orange", "yellow")\ntuples_to_dict = dict(zip(k, v))\nprint(tuples_to_dict)\n')),(0,a.kt)("p",null,"You don't have guarantees about the order in which elements of the set get zipped,\nand zipping string will give pairing of letters, but both of these work mechanically."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_Dict_Zip_Set_String",live_py:!0,title:"To_Dict_Zip_Set_String"},'k = {"apple", "orange", "banana"}\nv = {"red", "orange", "yellow"}\nsets_to_dict = dict(zip(k, v))\nprint(sets_to_dict)\n\nk = "abcde"\nv = "12345"\nstrings_to_dict = dict(zip(k, v))\nprint(strings_to_dict)\n')),(0,a.kt)("p",null,"You can also zip two different collections together."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_Dict_Zip_Mix",live_py:!0,title:"To_Dict_Zip_Mix"},'k = "abcd"\nv = ["apple", "orange", "banana", "durian"]\nmix_to_dict = dict(zip(k, v))\nprint(mix_to_dict)\n'))),(0,a.kt)("h2",{id:"for-loops"},"For Loops"),(0,a.kt)("p",null,'Both sets and dictionaries are iterables, as so we can use for loops over them.\n"For every element in this set ..." seems like a reasonable thing to do/say.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=For_Set",live_py:!0,title:"For_Set"},'fruits = {"apple", "orange", "banana"}\nfor fruit in fruits:\n  print(f"{fruit}s are fruits")\n')),(0,a.kt)("p",null,"The default iteration over dictionaries is over their keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=For_Dict_Key",live_py:!0,title:"For_Dict_Key"},'fruit_colours = {"apple": "red", "orange": "orange", "banana": "yellow"}\n# "for fruit in fruit_colours.keys()" would do the same thing\nfor fruit in fruit_colours:\n  print(f"{fruit}s may be {fruit_colours[fruit]}")\n')),(0,a.kt)("p",null,"But it may be totally reasonable use the ",(0,a.kt)("inlineCode",{parentName:"p"},".items()")," method in order to\niterate over key-value pairs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=For_Dict_Key_Value",live_py:!0,title:"For_Dict_Key_Value"},'fruit_colours = {"apple": "red", "orange": "orange", "banana": "yellow"}\nfor (fruit,colour) in fruit_colours.items():\n  print(f"{fruit}s may be {colour}")\n')),(0,a.kt)("p",null,"And maybe in some cases you don't care about the keys at all,\nyou could use the ",(0,a.kt)("inlineCode",{parentName:"p"},".values()")," method to iterate over the values alone."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=For_Dict_Value",live_py:!0,title:"For_Dict_Value"},'fruit_colours = {"apple": "red", "orange": "orange", "banana": "yellow"}\nfor colour in fruit_colours.values():\n  print(f"I forget what fruits may be {colour}")\n')),(0,a.kt)("h2",{id:"deletion-del"},"Deletion (",(0,a.kt)("inlineCode",{parentName:"h2"},"del"),")"),(0,a.kt)("p",null,"There is a key word, ",(0,a.kt)("inlineCode",{parentName:"p"},"del"),",\nthat allows you to delete values and effectively un-assign variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Del_Var",live_py:!0,title:"Del_Var"},'x = 31415\nprint(f"x: {x}")\ndel x\nprint(f"x: {x}") # Error, because x has no value\n')),(0,a.kt)("p",null,"This can be used to delete an entire collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Del_Collection",live_py:!0,title:"Del_Collection"},'d = {0: 3, 1: 1, 2: 4, 3: 1, 4: 5}\nprint(f"d: {d}")\ndel d\nprint(f"d: {d}") # Error, because d has no value\n')),(0,a.kt)("p",null,"However, it can also be used to delete ",(0,a.kt)("strong",{parentName:"p"},"elements")," from a\n",(0,a.kt)("strong",{parentName:"p"},"mutable and indexable")," collection (e.i., lists and dicts)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Del_Elem",live_py:!0,title:"Del_Elem"},'list_var = [3,1,4,1,5]\ndict_var = {"a": "apple", "b": "banana", "c": "cherry"}\n\nprint(f"list: {list_var}")\nprint(f"dict: {dict_var}")\n\ndel list_var[2]\ndel dict_var["b"]\n\nprint(f"list: {list_var}")\nprint(f"dict: {dict_var}")\n')),(0,a.kt)("p",null,"You can also delete entire slices in this way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Del_Slice",live_py:!0,title:"Del_Slice"},'l = [3,1,4,1,5]\nprint(f"l: {l}")\ndel l[1::2]\nprint(f"l: {l}")\n')))}d.isMDXComponent=!0}}]);