(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3999:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(2596),s=r(9688);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}},5475:(e,t,r)=>{"use strict";r.d(t,{NotifyForm:()=>O});var a=r(5155),s=r(221),n=r(2177),i=r(2115),l=r(5594),o=r(7168),d=r(9708),c=r(3999);let u=n.Op,x=i.createContext({}),m=e=>{let{...t}=e;return(0,a.jsx)(x.Provider,{value:{name:t.name},children:(0,a.jsx)(n.xI,{...t})})},f=()=>{let e=i.useContext(x),t=i.useContext(g),{getFieldState:r}=(0,n.xW)(),a=(0,n.lN)({name:e.name}),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...s}},g=i.createContext({});function h(e){let{className:t,...r}=e,s=i.useId();return(0,a.jsx)(g.Provider,{value:{id:s},children:(0,a.jsx)("div",{"data-slot":"form-item",className:(0,c.cn)("grid gap-2 w-full",t),...r})})}function v(e){let{...t}=e,{error:r,formItemId:s,formDescriptionId:n,formMessageId:i}=f();return(0,a.jsx)(d.DX,{"data-slot":"form-control",id:s,"aria-describedby":r?"".concat(n," ").concat(i):"".concat(n),"aria-invalid":!!r,...t})}function b(e){var t;let{className:r,...s}=e,{error:n,formMessageId:i}=f(),l=n?String(null!==(t=null==n?void 0:n.message)&&void 0!==t?t:""):s.children;return l?(0,a.jsx)("p",{"data-slot":"form-message",id:i,className:(0,c.cn)("text-destructive-foreground text-sm",r),...s,children:l}):null}function p(e){let{className:t,type:r,...s}=e;return(0,a.jsx)("input",{type:r,"data-slot":"input",className:(0,c.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...s})}var j=r(4520);function y(e){let{...t}=e;return(0,a.jsx)(j.bL,{"data-slot":"alert-dialog",...t})}function w(e){let{...t}=e;return(0,a.jsx)(j.ZL,{"data-slot":"alert-dialog-portal",...t})}function N(e){let{className:t,...r}=e;return(0,a.jsx)(j.hJ,{"data-slot":"alert-dialog-overlay",className:(0,c.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",t),...r})}function k(e){let{className:t,...r}=e;return(0,a.jsxs)(w,{children:[(0,a.jsx)(N,{}),(0,a.jsx)(j.UC,{"data-slot":"alert-dialog-content",className:(0,c.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),...r})]})}function z(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"alert-dialog-header",className:(0,c.cn)("flex flex-col gap-2 text-center sm:text-left",t),...r})}function C(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"alert-dialog-footer",className:(0,c.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...r})}function _(e){let{className:t,...r}=e;return(0,a.jsx)(j.hE,{"data-slot":"alert-dialog-title",className:(0,c.cn)("text-lg font-semibold",t),...r})}function F(e){let{className:t,...r}=e;return(0,a.jsx)(j.VY,{"data-slot":"alert-dialog-description",className:(0,c.cn)("text-muted-foreground text-sm",t),...r})}function I(e){let{className:t,...r}=e;return(0,a.jsx)(j.rc,{className:(0,c.cn)((0,o.r)(),t),...r})}let E=l.z.object({email:l.z.string().email({message:"Невірна адреса електронної пошти"})}),O=()=>{let e=(0,n.mN)({resolver:(0,s.u)(E),defaultValues:{email:""}}),[t,r]=(0,i.useState)(!1),{isSubmitting:l,isValid:d}=e.formState;return(0,a.jsxs)("div",{className:"text-center p-8 rounded-lg shadow-xl bg-white dark:bg-gray-900 max-w-md w-full",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Скоро!"}),(0,a.jsxs)("div",{className:"text-lg text-gray-600 dark:text-gray-300 mb-8",children:[(0,a.jsx)("div",{children:"Щось неймовірне наближається."}),(0,a.jsx)("div",{children:"Слідкуйте за оновленнями!"})]}),(0,a.jsx)(u,{...e,children:(0,a.jsxs)("form",{onSubmit:e.handleSubmit(function(t){console.log("Form submitted with:",t),r(!0),e.reset()}),className:"space-y-4 my-4 flex flex-col items-start w-full",children:[(0,a.jsx)(m,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,a.jsxs)(h,{children:[(0,a.jsx)(v,{children:(0,a.jsx)(p,{className:"w-full",placeholder:"Ваш email",...t,disabled:l})}),(0,a.jsx)(b,{})]})}}),(0,a.jsx)(o.$,{disabled:!d||l,type:"submit",className:"w-full",children:"Повідомити мене"})]})}),(0,a.jsx)("p",{className:"mt-8 text-sm text-gray-500 dark:text-gray-400",children:"\xa9 2025 shryft.com . Всі права захищені."}),(0,a.jsx)(y,{open:t,onOpenChange:r,children:(0,a.jsxs)(k,{children:[(0,a.jsxs)(z,{children:[(0,a.jsx)(_,{children:"Дякуємо!"}),(0,a.jsx)(F,{children:"Ми зв'яжемося з вами, як тільки проект набуде фінального вигляду. Будьте з нами, адже попереду багато цікавого!"})]}),(0,a.jsx)(C,{children:(0,a.jsx)(I,{onClick:()=>r(!1),children:"OK"})})]})})]})}},7168:(e,t,r)=>{"use strict";r.d(t,{$:()=>o,r:()=>l});var a=r(5155);r(2115);var s=r(9708),n=r(2085),i=r(3999);let l=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:t,variant:r,size:n,asChild:o=!1,...d}=e,c=o?s.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,i.cn)(l({variant:r,size:n,className:t})),...d})}},9217:(e,t,r)=>{Promise.resolve().then(r.bind(r,5475))}},e=>{var t=t=>e(e.s=t);e.O(0,[522,825,441,684,358],()=>t(9217)),_N_E=e.O()}]);