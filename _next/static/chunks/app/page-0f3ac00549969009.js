(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{775:(e,t,r)=>{"use strict";r.d(t,{NotifyForm:()=>x});var a=r(5155),n=r(221),s=r(2177),i=r(2115),o=r(5594),l=r(7168),d=r(9540),c=r(9852),u=r(6559);let m=o.z.object({email:o.z.string().email({message:"Невірна адреса електронної пошти"})}),x=()=>{let e=(0,s.mN)({resolver:(0,n.u)(m),defaultValues:{email:""}}),[t,r]=(0,i.useState)(!1),{isSubmitting:o,isValid:x}=e.formState;return(0,a.jsxs)("div",{className:"text-center p-8 rounded-lg shadow-xl bg-white dark:bg-gray-900 max-w-md w-full",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",children:"Скоро!"}),(0,a.jsxs)("div",{className:"text-lg text-gray-600 dark:text-gray-300 mb-8",children:[(0,a.jsx)("div",{children:"Щось неймовірне наближається."}),(0,a.jsx)("div",{children:"Слідкуйте за оновленнями!"})]}),(0,a.jsx)(d.lV,{...e,children:(0,a.jsxs)("form",{onSubmit:e.handleSubmit(function(t){console.log("Form submitted with:",t),r(!0),e.reset()}),className:"space-y-4 my-4 flex flex-col items-start w-full",children:[(0,a.jsx)(d.zB,{control:e.control,name:"email",render:e=>{let{field:t}=e;return(0,a.jsxs)(d.eI,{children:[(0,a.jsx)(d.MJ,{children:(0,a.jsx)(c.p,{className:"w-full",placeholder:"Ваш email",...t,disabled:o})}),(0,a.jsx)(d.C5,{})]})}}),(0,a.jsx)(l.$,{disabled:!x||o,type:"submit",className:"w-full",children:"Повідомити мене"})]})}),(0,a.jsx)("p",{className:"mt-8 text-sm text-gray-500 dark:text-gray-400",children:"\xa9 2025 shryft.com . Всі права захищені."}),(0,a.jsx)(u.Lt,{open:t,onOpenChange:r,children:(0,a.jsxs)(u.EO,{children:[(0,a.jsxs)(u.wd,{children:[(0,a.jsx)(u.r7,{children:"Дякуємо!"}),(0,a.jsx)(u.$v,{children:"Ми зв'яжемося з вами, як тільки проект набуде фінального вигляду. Будьте з нами, адже попереду багато цікавого!"})]}),(0,a.jsx)(u.ck,{children:(0,a.jsx)(u.Rx,{onClick:()=>r(!1),children:"OK"})})]})})]})}},2369:(e,t,r)=>{var a={"./ru/zakaz-form.json":5483,"./ua/zakaz-form.json":4838};function n(e){return r(s(e))}function s(e){if(!r.o(a,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=2369},3999:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s,l:()=>i});var a=r(2596),n=r(9688);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}function i(e,t){let a=r(2369)("./".concat(e,"/").concat(t,".json"));return e=>a[e]}},4838:e=>{"use strict";e.exports=JSON.parse('{"InvalidEmail":"Невірна адреса електронної пошти","InvalidPhone":"Невірний номер телефону","Name":"Ім\'я","Email":"Ваш email","Submit":"Відправити","SelectFile":"Вибрати файл","Reset":"Очистити","Message":"Повідомлення","Thanks":"Дякуємо!","Acknowledgment":"Дякуємо за Ваш запит! Наш менеджер зв\'яжеться з Вами найближчим часом для обговорення деталей та узгодження подальших кроків.","UsernameRequired":"Ім\'я користувача обов\'язкове","UsernameTooLong":"Ім\'я користувача не повинно перевищувати 50 символів","CommentTooLong":"Повідомлення не повинно перевищувати 500 символів","desiredCompletionDay":"Бажаний день виконання","FileSizeExceeded":"Вибраний файл перевищує максимально допустимий розмір у 50 МБ. Будь ласка, виберіть файл меншого розміру."}')},5483:e=>{"use strict";e.exports=JSON.parse('{"InvalidEmail":"Неверный адрес электронной почты","InvalidPhone":"Неверный номер телефона","Name":"Имя","Email":"Ваш email","Submit":"Отправить","SelectFile":"Выбрать файл","Reset":"Очистить","Message":"Сообщение","Thanks":"Спасибо!","Acknowledgment":"Спасибо за Ваш запрос! Наш менеджер свяжется с Вами в ближайшее время для обсуждения деталей и согласования дальнейших шагов.","UsernameRequired":"Имя пользователя обязательно","UsernameTooLong":"Имя пользователя не должно превышать 50 символов","CommentTooLong":"Сообщение не должно превышать 500 символов","desiredCompletionDay":"Желаемый день выполнения","FileSizeExceeded":"Выбранный файл превышает максимально допустимый размер в 50 МБ. Пожалуйста, выберите файл меньшего размера."}')},6559:(e,t,r)=>{"use strict";r.d(t,{$v:()=>f,EO:()=>c,Lt:()=>o,Rx:()=>g,ck:()=>m,r7:()=>x,wd:()=>u});var a=r(5155);r(2115);var n=r(4520),s=r(3999),i=r(7168);function o(e){let{...t}=e;return(0,a.jsx)(n.bL,{"data-slot":"alert-dialog",...t})}function l(e){let{...t}=e;return(0,a.jsx)(n.ZL,{"data-slot":"alert-dialog-portal",...t})}function d(e){let{className:t,...r}=e;return(0,a.jsx)(n.hJ,{"data-slot":"alert-dialog-overlay",className:(0,s.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",t),...r})}function c(e){let{className:t,...r}=e;return(0,a.jsxs)(l,{children:[(0,a.jsx)(d,{}),(0,a.jsx)(n.UC,{"data-slot":"alert-dialog-content",className:(0,s.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),...r})]})}function u(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"alert-dialog-header",className:(0,s.cn)("flex flex-col gap-2 text-center sm:text-left",t),...r})}function m(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"alert-dialog-footer",className:(0,s.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...r})}function x(e){let{className:t,...r}=e;return(0,a.jsx)(n.hE,{"data-slot":"alert-dialog-title",className:(0,s.cn)("text-lg font-semibold",t),...r})}function f(e){let{className:t,...r}=e;return(0,a.jsx)(n.VY,{"data-slot":"alert-dialog-description",className:(0,s.cn)("text-muted-foreground text-sm",t),...r})}function g(e){let{className:t,...r}=e;return(0,a.jsx)(n.rc,{className:(0,s.cn)((0,i.r)(),t),...r})}},7168:(e,t,r)=>{"use strict";r.d(t,{$:()=>l,r:()=>o});var a=r(5155);r(2115);var n=r(9708),s=r(2085),i=r(3999);let o=(0,s.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:r,size:s,asChild:l=!1,...d}=e,c=l?n.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,i.cn)(o({variant:r,size:s,className:t})),...d})}},9217:(e,t,r)=>{Promise.resolve().then(r.bind(r,775))},9540:(e,t,r)=>{"use strict";r.d(t,{lV:()=>l,MJ:()=>f,zB:()=>c,eI:()=>x,C5:()=>g});var a=r(5155),n=r(2115),s=r(9708),i=r(2177),o=r(3999);let l=i.Op,d=n.createContext({}),c=e=>{let{...t}=e;return(0,a.jsx)(d.Provider,{value:{name:t.name},children:(0,a.jsx)(i.xI,{...t})})},u=()=>{let e=n.useContext(d),t=n.useContext(m),{getFieldState:r}=(0,i.xW)(),a=(0,i.lN)({name:e.name}),s=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},m=n.createContext({});function x(e){let{className:t,...r}=e,s=n.useId();return(0,a.jsx)(m.Provider,{value:{id:s},children:(0,a.jsx)("div",{"data-slot":"form-item",className:(0,o.cn)("grid gap-2 w-full",t),...r})})}function f(e){let{...t}=e,{error:r,formItemId:n,formDescriptionId:i,formMessageId:o}=u();return(0,a.jsx)(s.DX,{"data-slot":"form-control",id:n,"aria-describedby":r?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!r,...t})}function g(e){var t;let{className:r,...n}=e,{error:s,formMessageId:i}=u(),l=s?String(null!==(t=null==s?void 0:s.message)&&void 0!==t?t:""):n.children;return l?(0,a.jsx)("p",{"data-slot":"form-message",id:i,className:(0,o.cn)("text-destructive-foreground text-sm",r),...n,children:l}):null}},9852:(e,t,r)=>{"use strict";r.d(t,{p:()=>s});var a=r(5155);r(2115);var n=r(3999);function s(e){let{className:t,type:r,...s}=e;return(0,a.jsx)("input",{type:r,"data-slot":"input",className:(0,n.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...s})}}},e=>{var t=t=>e(e.s=t);e.O(0,[522,825,441,684,358],()=>t(9217)),_N_E=e.O()}]);