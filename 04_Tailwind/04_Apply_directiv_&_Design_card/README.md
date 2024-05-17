Apply Directive

use @apply to inline any existing utility classes into your own custom CSS.

suppose we have a many classes same on each & every differnt line. then we create a apply directive to uses one & only every where. 


Always priority of last classes suppose we create any class and use their color or something and to the bottom
we also create one more class and use it. then that class appled & replace aboves example:
.box { 
    @apply bg-purple-500 text-white m-4 border-2 rounded
}

we changed the text-white value to black
.text-white {
    @apply text-black
}


