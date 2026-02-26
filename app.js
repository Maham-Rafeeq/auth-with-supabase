import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
let project_url="https://gdwzktkfuhpththerfnf.supabase.co"
let project_unnonkey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkd3prdGtmdWhwdGh0aGVyZm5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NTgwNjUsImV4cCI6MjA4NjAzNDA2NX0.d1_p-ZccPJPNY-n_1DFwDOjBVYG5px_YIhqi7gUtSWA";

const supabase = createClient(project_url,project_unnonkey);

// FOR SIGN-UP
async function signup(from){
     const userinput = new FormData(from);
      let userdata ={
        Email:userinput.get("email"),
        Password:userinput.get("password")
     }
   const { data, error } = await supabase.auth.signUp({
  email: userdata.Email,
  password: userdata.Password,
})
 if (error) {
    alert("Error: " + error.message)
  } else {
    console.log(data)
     window.location.href = "welcom.html" 
    
  }
    signup.reset = reset
}
// FOR SIGN-IN
async function login(loginform){
    const userinput = new FormData(loginform);
    let userdata={
        Email:userinput.get("email"),
        Password:userinput.get("password")
    }
    const { data, error } = await supabase.auth.signInWithPassword({
  email: userdata.Email,
  password:userdata.Password,
})
  if (error) {
    alert("Error: " + error.message)
  } else {
     window.location.href = "welcom.html" 
  }
  loginform.reset();
}
// FOR SIGN-OUT
async function signout(){
    const { error } = await supabase.auth.signOut();
    if(error){
        alert("failed to sign-out" + error.message)
    }
    else{
         window.location.href = "signin.html" 
    }
}


window.signup =signup
window.login =login
window.signout =signout
console.log("hello world");
