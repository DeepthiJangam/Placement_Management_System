//Admin Details

let admin={
    username : "Deepthi",
    password : "rgukt123",
}; 

//let adminLoggedInDisplayEl=document.getElementById("adminLoggedInDisplayId");
//let AdminloginSuccessEl=document.getElementById("AdminloginSuccessId");
//let afterAdminLoginEL=document.getElementById("afterAdminLoginId");
let adminLoginBtnEl=document.getElementById("adminLoginBtnId");
let usernameAdminLoginEl=document.getElementById("usernameAdminLoginId");
let passwordAdminLoginEl=document.getElementById("passwordAdminLoginId");
//let adminOptionsEl=document.getElementById("adminOptionsId");
if(adminLoginBtnEl){
adminLoginBtnEl.onclick=function(){
    let uname=usernameAdminLoginEl.value;
    let pwd=passwordAdminLoginEl.value;
    if(uname===admin.username){
        if(pwd===admin.password){
            // adminOptionsEl.classList.add("d-flex");
            // afterAdminLoginEL.classList.remove("d-flex");
            // afterAdminLoginEL.classList.add("d-none");
            // AdminloginSuccessEl.classList.add("d-none");
            // adminLoggedInDisplayEl.classList.remove("d-none");
            window.location.href="AdminHome.html";
        }
        else{
            alert("Wrong Password");
            passwordAdminLoginEl.value="";
        }
    }
    else{
        alert("Wrong Username");
        passwordAdminLoginEl.value="";
    }
};
}

//adminUserDetails
let adminUserDetailsEl=document.getElementById("adminUserDetails");

function DisplayUsers()
{
    let userList=getLocalStorageUserList();
    let UserJobStatusList=getUserJobStatusList();
    for(let user of userList)
    {
        let divEl=document.createElement('div');

        let tableEl=document.createElement('table');

        let trEl3=document.createElement('tr');
        let tdEl31=document.createElement('td');
        tdEl31.textContent="First Name";
        tdEl31.classList.add("table-heading");
        let tdEl32=document.createElement('td');
        tdEl32.textContent=user.firstName;
        tdEl32.classList.add("p-1");
        tdEl32.classList.add("table-content");
        trEl3.appendChild(tdEl31);
        trEl3.appendChild(tdEl32);

        let trEl4=document.createElement('tr');
        let tdEl41=document.createElement('td');
        tdEl41.textContent="Last Name";
        tdEl41.classList.add("table-heading");
        let tdEl42=document.createElement('td');
        tdEl42.textContent=user.lastName;
        tdEl42.classList.add("p-1");
        tdEl42.classList.add("table-content");
        trEl4.appendChild(tdEl41);
        trEl4.appendChild(tdEl42);

        let trEl1=document.createElement('tr');
        let tdEl11=document.createElement('td');
        tdEl11.textContent="ID  ";
        tdEl11.classList.add("table-heading");
        let tdEl12=document.createElement('td');
        tdEl12.textContent=user.ID;
        tdEl12.classList.add("p-1");
        tdEl12.classList.add("table-content");
        trEl1.appendChild(tdEl11);
        trEl1.appendChild(tdEl12);
        
        let trEl2=document.createElement('tr');
        let tdEl21=document.createElement('td');
        tdEl21.textContent="Email";
        tdEl21.classList.add("table-heading");
        let tdEl22=document.createElement('td');
        tdEl22.textContent=user.Email;
        tdEl22.classList.add("p-1");
        tdEl22.classList.add("table-content");
        trEl2.appendChild(tdEl21);
        trEl2.appendChild(tdEl22);

        let trEl5=document.createElement('tr');
        let tdEl51=document.createElement('td');
        tdEl51.textContent="Branch";
        tdEl51.classList.add("table-heading");
        let tdEl52=document.createElement('td');
        tdEl52.textContent=user.Branch;
        tdEl52.classList.add("p-1");
        tdEl52.classList.add("table-content");
        trEl5.appendChild(tdEl51);
        trEl5.appendChild(tdEl52);

        tableEl.appendChild(trEl3);
        tableEl.appendChild(trEl4);
        tableEl.appendChild(trEl1);
        tableEl.appendChild(trEl2);
        tableEl.appendChild(trEl5);
        
        let count=0;
        for(let User of UserJobStatusList)
        {
            if(user.username === User.user)
            {
                count+=1;
            }
        }
        if(count>0){
            let trEl6 = document.createElement('tr');
            let tdEl6=document.createElement('td');
            tdEl6.colSpan=2;
            tdEl6.textContent="User Applied Jobs";
            tdEl6.classList.add("table-heading","text-center","pb-2");
            tdEl6.style.height='70px';
            trEl6.appendChild(tdEl6);
            tableEl.appendChild(trEl6);
            for(let User of UserJobStatusList)
            {
                if(user.username === User.user)
                {
                    let trEl61 = document.createElement('tr');
                    let tdEl611 = document.createElement('td');
                    let tdEl612 = document.createElement('td');
                    tdEl611.textContent = User.company;
                    tdEl612.textContent = User.position;
                    tdEl611.classList.add("table-heading","p-2","w-50");
                    tdEl612.classList.add("table-content");
                    trEl61.appendChild(tdEl611);
                    trEl61.appendChild(tdEl612);
                    tableEl.appendChild(trEl61);
                    count+=1;
                }
            }
        }
        
        
        adminUserDetailsEl.classList.add("profile","p-3",);
        adminUserDetailsEl.appendChild(divEl);
        divEl.appendChild(tableEl);
        divEl.classList.add("mt-3","p-5","profile-card","shadow","text-center");
    }
}
if(adminUserDetailsEl)
{
    DisplayUsers();
}


//Admin View Job Details

let AdminViewJobDetailsEl = document.getElementById("AdminViewJobDetailsId");

function DeleteJob(divJobId,eachJob){
    let JobList = getaddJobList();
    let cname=eachJob.Name;
    let position=eachJob.Position;

    let delEl=document.getElementById(divJobId);
    AdminViewJobDetailsEl.removeChild(delEl);

    let deleteElementIndex = JobList.findIndex(function(Job) {
        let jcname=Job.Name;
        let jposition=Job.Position;
        if(jcname==cname && position===jposition) {
        return true;
        } else {
        return false;
        }
    });

    JobList.splice(deleteElementIndex, 1);
    localStorage.setItem("addJobList",JSON.stringify(JobList));

    let UserJobStatusList=getUserJobStatusList();
    
    //let newUserJobList=[];

    // for(let eachUser of UserJobStatusList){
    //     let count=0;
    //     let deleteElIndex = UserJobStatusList.findIndex(function(Job) {
    //         let jcname=Job.company;
    //         let jposition=Job.position;
    //         if(jcname==cname && position===jposition) {
    //             count=count+1;
    //             console.log(count);
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     newUserJobList.push(eachJob);
    // }
    // for(let i=0;i<count;i++){
    //     for(let eachUser of UserJobStatusList){
    //         let deleteElIndex = UserJobStatusList.findIndex(function(Job) {
    //             let jcname=Job.company;
    //             let jposition=Job.position;
    //             if(jcname==cname && position===jposition) {
    //             return true;
    //             } else {
    //             return false;
    //             }
    //         });
        
    //         UserJobStatusList.splice(deleteElIndex, 1);
    //     }
    // }
    let count=0;
    for(let eachUser of UserJobStatusList){
        let jcname=eachUser.company;
        let jposition=eachUser.position;
        if(cname==jcname && position==jposition){
            count++;
        }
    }
    for(let i=0;i<count;i++){
        let deleteElIndex = UserJobStatusList.findIndex(function(Job) {
            let jcname=Job.company;
            let jposition=Job.position;
            if(jcname==cname && position===jposition) {
            return true;
            } else {
            return false;
            }
        });
    
        UserJobStatusList.splice(deleteElIndex, 1);
        console.log(UserJobStatusList);
    }
    localStorage.setItem("UserJobStatusList",JSON.stringify(UserJobStatusList));
}

function AdminViewJobs()
{
    let JobList = getaddJobList();
    let num=1;
    for(let eachJob of JobList)
    {
        let jname = eachJob.Name;
        let jposition = eachJob.Position;
        let jhirings = eachJob.Hirings;
        let jsalary = eachJob.Salary;
        let jlocation = eachJob.Location;

        let divJobEl=document.createElement('div');

        let tableJobEl=document.createElement('table');

        let trJobEl1=document.createElement('tr');
        let tdJobEl11=document.createElement('td');
        tdJobEl11.textContent="Company Name";
        tdJobEl11.classList.add("table-heading");
        let tdJobEl12=document.createElement('td');
        tdJobEl12.textContent=jname;
        tdJobEl12.classList.add("p-2");
        trJobEl1.appendChild(tdJobEl11);
        trJobEl1.appendChild(tdJobEl12);


        let trJobEl2=document.createElement('tr');
        let tdJobEl21=document.createElement('td');
        tdJobEl21.textContent="Position";
        tdJobEl21.classList.add("table-heading");
        let tdJobEl22=document.createElement('td');
        tdJobEl22.textContent=jposition;
        tdJobEl22.classList.add("p-2");
        trJobEl2.appendChild(tdJobEl21);
        trJobEl2.appendChild(tdJobEl22);


        let trJobEl3=document.createElement('tr');
        let tdJobEl31=document.createElement('td');
        tdJobEl31.textContent="Hirings";
        tdJobEl31.classList.add("table-heading");
        let tdJobEl32=document.createElement('td');
        tdJobEl32.textContent=jhirings;
        tdJobEl32.classList.add("p-2");
        trJobEl3.appendChild(tdJobEl31);
        trJobEl3.appendChild(tdJobEl32);


        let trJobEl4=document.createElement('tr');
        let tdJobEl41=document.createElement('td');
        tdJobEl41.textContent="Salary";
        tdJobEl41.classList.add("table-heading");
        let tdJobEl42=document.createElement('td');
        tdJobEl42.textContent=jsalary;
        tdJobEl42.classList.add("p-2");
        trJobEl4.appendChild(tdJobEl41);
        trJobEl4.appendChild(tdJobEl42);

        let trJobEl5=document.createElement('tr');
        let tdJobEl51=document.createElement('td');
        tdJobEl51.textContent="Location";
        tdJobEl51.classList.add("table-heading");
        let tdJobEl52=document.createElement('td');
        tdJobEl52.textContent=jlocation;
        tdJobEl52.classList.add("p-3");
        trJobEl5.appendChild(tdJobEl51);
        trJobEl5.appendChild(tdJobEl52);

        let btnEl=document.createElement('button');
        btnEl.classList.add("btn","btn-danger");
        btnEl.textContent="Delete";

        tableJobEl.appendChild(trJobEl1);
        tableJobEl.appendChild(trJobEl2);
        tableJobEl.appendChild(trJobEl3);
        tableJobEl.appendChild(trJobEl4);
        tableJobEl.appendChild(trJobEl5);

        
        divJobEl.appendChild(tableJobEl);
        divJobEl.appendChild(btnEl);
        divJobEl.classList.add("w-50","shadow","px-5","py-5");
        AdminViewJobDetailsEl.appendChild(divJobEl);

        let jobDelId=jposition+num;
        num+=1;
        divJobEl.setAttribute('id',jobDelId);
        if(btnEl){
            btnEl.onclick=function(){
                DeleteJob(jobDelId,eachJob);
            };
        }
    }
}
if(AdminViewJobDetailsEl){
    AdminViewJobs();
}


//Global variables

var loggedUname;
var loggedPwd;

//ADD COMPANY
let companyNameEl = document.getElementById("companyName");
let companyLinkedinEl = document.getElementById("companyLinkedin");
let companyWebsiteEl = document.getElementById("companyWebsite");
let companyHeadquartersEl = document.getElementById("companyHeadquarters");
let companySpecialitiesEl = document.getElementById("companySpecialities");
let companyImageUrlEl = document.getElementById("companyImageUrl");
let addCompanyBtnEl = document.getElementById("addCompanyBtnId");

// let companyList = [
//     {
//          Name: "Infosys",
//         LinkedIn: "https://www.linkedin.com/company/infosys",
//         Website: "https://www.infosys.com/",
//         HeadQuaters: "Bangalore, Karnataka",
//         Specialities: "IT Solutions and Services, Consulting, Business Process Outsourcing, Products and Platforms, Engineering Services, Cloud Services, Artificial Intelligence, Digital, and Big Data",
//         ImageUrl:"https://aniportalimages.s3.amazonaws.com/media/details/Capture20210909104143-120210909110701.jpg",
//     },
// ];
//localStorage.setItem("companyList",JSON.stringify(companyList));

// ADD Companies

function getCompanyList(){
    let companyList = JSON.parse(localStorage.getItem("companyList"));
    if(companyList===null){
        return [];
    }
    return companyList;
}
if(addCompanyBtnEl){
    let companyList=getCompanyList();
    let companyExists=false;
    addCompanyBtnEl.onclick = function() {
        let cname = companyNameEl.value;
        for (eachCompany of companyList){
            if(eachCompany.Name===cname){
                companyExists=true;
                alert("Company Already Exists");
            }
        }
        if(!companyExists){
            let clinkedin = companyLinkedinEl.value;
            let cwebsite = companyWebsiteEl.value;
            let cheadquaters = companyHeadquartersEl.value;
            let cspecial = companySpecialitiesEl.value;
            let cimage = companyImageUrlEl.value;
            let companyObj = {
                Name: cname,
                LinkedIn: clinkedin,
                Website: cwebsite,
                HeadQuaters: cheadquaters,
                Specialities: cspecial,
                ImageUrl: cimage,
            };
            companyList.push(companyObj);
            localStorage.setItem("companyList",JSON.stringify(companyList));
        }
        companyNameEl.value="";
        companyLinkedinEl.value="";
        companyWebsiteEl.value="";
        companyHeadquartersEl.value="";
        companySpecialitiesEl.value="";
        companyImageUrlEl.value="";
    };
}

//company Details Display

let companyDetailsEl=document.getElementById("companyDetailsId");
function CreateAndAddCompanyElement()
{
    let companyList=getCompanyList();
    for(let eachCompany of companyList)
    {
        let cname = eachCompany.Name;
        let clinkedin = eachCompany.LinkedIn;
        let cwebsite = eachCompany.Website;
        let cheadquaters = eachCompany.HeadQuaters;
        let cspecial = eachCompany.Specialities;
        let cimage = eachCompany.ImageUrl;

        let divEl=document.createElement('div');

        let tableEl=document.createElement('table');

        let trEl1=document.createElement('tr');
        let tdEl11=document.createElement('td');
        tdEl11.textContent="COMPANY  ";
        tdEl11.classList.add("table-heading");
        let tdEl12=document.createElement('td');
        tdEl12.textContent=cname;
        tdEl12.classList.add("p-2");
        trEl1.appendChild(tdEl11);
        trEl1.appendChild(tdEl12);
        
        let trEl2=document.createElement('tr');
        let tdEl21=document.createElement('td');
        tdEl21.textContent="LINKEDIN";
        tdEl21.classList.add("table-heading");
        let tdEl22=document.createElement('td');
        let link=document.createElement('a');
        link.textContent=clinkedin;
        link.setAttribute('href',clinkedin);
        link.setAttribute('target','_blank');
        tdEl22.appendChild(link);
        tdEl22.classList.add("p-2");
        trEl2.appendChild(tdEl21);
        trEl2.appendChild(tdEl22);

        let trEl3=document.createElement('tr');
        let tdEl31=document.createElement('td');
        tdEl31.textContent="WEBSITE";
        tdEl31.classList.add("table-heading");
        let tdEl32=document.createElement('td');
        let wlink=document.createElement('a');
        wlink.textContent=cwebsite;
        wlink.setAttribute('href',cwebsite);
        wlink.setAttribute('target','_blank');
        tdEl32.appendChild(wlink);
        tdEl32.classList.add("p-2");
        trEl3.appendChild(tdEl31);
        trEl3.appendChild(tdEl32);

        let trEl4=document.createElement('tr');
        let tdEl41=document.createElement('td');
        tdEl41.textContent="HEAD QUARTERS";
        tdEl41.classList.add("table-heading");
        let tdEl42=document.createElement('td');
        tdEl42.textContent=cheadquaters;
        tdEl42.classList.add("p-2");
        trEl4.appendChild(tdEl41);
        trEl4.appendChild(tdEl42);

        let trEl5=document.createElement('tr');
        let tdEl51=document.createElement('td');
        tdEl51.textContent="SPECIALITIES";
        tdEl51.classList.add("table-heading");
        let tdEl52=document.createElement('td');
        tdEl52.textContent=cspecial;
        tdEl52.classList.add("p-3");
        trEl5.appendChild(tdEl51);
        trEl5.appendChild(tdEl52);


        tableEl.appendChild(trEl1);
        tableEl.appendChild(trEl2);
        tableEl.appendChild(trEl3);
        tableEl.appendChild(trEl4);
        tableEl.appendChild(trEl5);

        let imageEl=document.createElement('img');
        imageEl.setAttribute('src',cimage);
        imageEl.classList.add("company-logo");
        divEl.appendChild(imageEl);
        divEl.appendChild(tableEl);
        companyDetailsEl.appendChild(divEl);
        divEl.classList.add("mt-3","company-card","shadow");
        companyDetailsEl.classList.add("company","p-3")
    }
}
if(companyDetailsEl){
    CreateAndAddCompanyElement();
}

//Add Job Details

function getaddJobList(){
    let addJobList = JSON.parse(localStorage.getItem("addJobList"));
    if(addJobList===null){
        return [];
    }
    return addJobList;
}
let addJobBtnEl=document.getElementById("addJobBtnId");
let addCompanyNameEl=document.getElementById("addCompanyName");
let addJobPositionEl=document.getElementById("addJobPosition");
let addJobHiringsEl=document.getElementById("addJobHirings");
let addJobSalaryEl=document.getElementById("addJobSalary");
let addJobLocationEl=document.getElementById("addJobLocation");

let id;
if(addJobBtnEl){
    let addJobList=getaddJobList();
    id=addJobList.length;
    let companyList=getCompanyList();
    let companyExists=false;
    addJobBtnEl.onclick = function() {
        let jname = addCompanyNameEl.value;
        for (eachCompany of companyList){
            if(eachCompany.Name===jname){
                companyExists=true;
                break;
            }
        }
        if(companyExists){
            let jposition = addJobPositionEl.value;
            let jhirings = addJobHiringsEl.value;
            let jsalary = addJobSalaryEl.value;
            let jlocation = addJobLocationEl.value;
            let addJobObj = {
                Name : jname,
                Position : jposition,
                Hirings: jhirings,
                Salary : jsalary,
                Location : jlocation,
                Jobid : id,
            };
            id+=1;
            if(jposition==="" || jhirings==="" || jsalary==="" || jlocation===""){
                alert("Enter all Fileds");
            }
            else{
                addJobList.push(addJobObj);
                localStorage.setItem("addJobList",JSON.stringify(addJobList));
                addCompanyNameEl.value="";
                addJobPositionEl.value="";
                addJobHiringsEl.value="";
                addJobSalaryEl.value="";
                addJobLocationEl.value="";
            }
        }
        else{
            alert("Company Does Not Exist");
            addCompanyNameEl.value="";
            addJobPositionEl.value="";
            addJobHiringsEl.value="";
            addJobSalaryEl.value="";
            addJobLocationEl.value="";
        }
    };
}

//Register Elements

let userRegisterEl=document.getElementById("userRegisterId");
let usernameEl=document.getElementById("usernameId");
let passwordEl=document.getElementById("passwordId");
let firstNameEL =document.getElementById("firstNameId");
let lastNameEl =document.getElementById("lastNameId");
let branchEl=document.getElementById("BranchId");
let emailEl=document.getElementById("EmailId");
let idEl=document.getElementById("IDId");

//localStorage.setItem("companyDetails",JSON.stringify(companyDetails));

// let userList=[
//     {
//         username :"Rishitha",
//         password : "rishitha" ,
//         firstName : "Rishitha",
//         lastName :"Peddolla" ,
//         ID : "B181063",
//         Branch : "CSE",
//         Email: "b181063@gmail.com",
//     },
// ]
// localStorage.setItem("userList",JSON.stringify(userList));

function getLocalStorageUserList(){
    let userList=JSON.parse(localStorage.getItem("userList"));
    if(userList===null){
        return [];
    }
    return userList;
}

function checkUserNameExists(userList,uname){
    for(let item of userList){
        if(item.username===uname){
            return true;
        }
    }
    return false;
}
function UserRegistration(){
    
    let userList=getLocalStorageUserList();
    let uname=usernameEl.value;
    let pwd=passwordEl.value;
    let fname=firstNameEL.value;
    let lname= lastNameEl.value;
    let branch=branchEl.value;
    let email=emailEl.value;
    let id=idEl.value;
    let userobj={
        username : uname,
        password : pwd ,
        firstName : fname,
        lastName :lname ,
        ID : id,
        Branch : branch,
        Email: email,
    };
    if(!checkUserNameExists(userList,uname)){
        userList.push(userobj);
        localStorage.setItem("userList",JSON.stringify(userList));
        let activeUserList=activeUserDetails();
        let userActive={
            username: uname,
            password: pwd,
        }
        activeUserList.push(userActive);
        localStorage.setItem("activeUserList",JSON.stringify(activeUserList));
        window.location.href="login.html";
    }
    else{
        alert("Username Already Exists");
    }
}

if(userRegisterEl){
    userRegisterEl.onclick = function(){
        UserRegistration();
    };
}


//Login


let usernameLoginEl=document.getElementById("usernameLoginId");
let passwordLoginEl=document.getElementById("passwordLoginId");
let userLoginEL=document.getElementById("userLoginId");
//let loginOptionsEl=document.getElementById("loginOptionsId");
let loginSuccessEl=document.getElementById("loginSuccessId");
//let afterLoginEl=document.getElementById("afterLoginId");

let loginDetailsEl=document.getElementById("loginDetailsId");


function CheckUserExists(userList,uname,pwd){
    for(let user of userList){
        if(user.username===uname){
            return true;
        }
    }
    return false;
}
function CheckUserPassword(userList,uname,pwd){
    for(let user of userList){
        if(user.username===uname && user.password===pwd){
            return true;
        }
    }
    return false;
}
function getJobStatusList(){
    if(localStorage.getItem("jobStatusList")===null){
        return [];
    }
    return JSON.parse(localStorage.getItem("jobStatusList"));
}
if(userLoginEL){
    userLoginEL.onclick=function(){
    let userList=getLocalStorageUserList();
    let uname=usernameLoginEl.value;
    let pwd=passwordLoginEl.value;
    if(CheckUserExists(userList,uname,pwd)){
        if(CheckUserPassword(userList,uname,pwd)){
            let activeUserList= []; //activeUserDetails();
            let userActive={
                username: uname,
                password: pwd,
            }
            activeUserList.push(userActive);
            localStorage.setItem("activeUserList",JSON.stringify(activeUserList));
            window.location.href="UserHome.html";
        }
        else{
            alert("Wrong Password");
            passwordLoginEl.value="";
        }
    }
    else{
        alert("Wrong Username");
        passwordLoginEl.value="";
    }
};
}

// let  addJobList=getaddJobList();
// let jobStatusList=getJobStatusList();
// afterLoginEl.classList.remove("d-flex");
// afterLoginEl.classList.add("d-none");
// loginOptionsEl.classList.add("d-flex");
// loginSuccessEl.classList.add("d-none");
// loginDetailsEl.classList.remove("d-none");
// for(let item of addJobList){
//     let obj={
//         User: uname,
//         Company: item.Name,
//         Position : item.Position,
//         Applied: "Not applied",
//     };
//     jobStatusList.push(obj);
// }
// localStorage.setItem("jobStatusList",JSON.stringify(jobStatusList));


//Profile Display

// let displayMyProfileEl=document.getElementById("displayMyProfile");
// if(displayMyProfileEl){
//     displayMyProfileEl.onclick=window.location.href="profile.html";
// }

let ProfileEl=document.getElementById("ProfileId");
function activeUserDetails(){
    let userDetails=JSON.parse(localStorage.getItem("activeUserList"));
    if(userDetails===null){
        return [];
    }
    return userDetails;
}

function displayDetails(){
    let userList=getLocalStorageUserList();
    let activeUser=activeUserDetails();
    let uname;
    for(user of activeUser){
        uname=user.username;
    }
    for(let user of userList){
        if(user.username===uname){
            let divEl=document.createElement('div');

            let tableEl=document.createElement('table');

            let trEl3=document.createElement('tr');
            let tdEl31=document.createElement('td');
            tdEl31.textContent="First Name";
            tdEl31.classList.add("table-heading");
            let tdEl32=document.createElement('td');
            tdEl32.textContent=user.firstName;
            tdEl32.classList.add("p-1");
            tdEl32.classList.add("table-content");
            trEl3.appendChild(tdEl31);
            trEl3.appendChild(tdEl32);

            let trEl4=document.createElement('tr');
            let tdEl41=document.createElement('td');
            tdEl41.textContent="Last Name";
            tdEl41.classList.add("table-heading");
            let tdEl42=document.createElement('td');
            tdEl42.textContent=user.lastName;
            tdEl42.classList.add("p-1");
            tdEl42.classList.add("table-content");
            trEl4.appendChild(tdEl41);
            trEl4.appendChild(tdEl42);

            let trEl1=document.createElement('tr');
            let tdEl11=document.createElement('td');
            tdEl11.textContent="ID  ";
            tdEl11.classList.add("table-heading");
            let tdEl12=document.createElement('td');
            tdEl12.textContent=user.ID;
            tdEl12.classList.add("p-1");
            tdEl12.classList.add("table-content");
            trEl1.appendChild(tdEl11);
            trEl1.appendChild(tdEl12);
            
            let trEl2=document.createElement('tr');
            let tdEl21=document.createElement('td');
            tdEl21.textContent="Email";
            tdEl21.classList.add("table-heading");
            let tdEl22=document.createElement('td');
            tdEl22.textContent=user.Email;
            tdEl22.classList.add("p-1");
            tdEl22.classList.add("table-content");
            trEl2.appendChild(tdEl21);
            trEl2.appendChild(tdEl22);

            let trEl5=document.createElement('tr');
            let tdEl51=document.createElement('td');
            tdEl51.textContent="Branch";
            tdEl51.classList.add("table-heading");
            let tdEl52=document.createElement('td');
            tdEl52.textContent=user.Branch;
            tdEl52.classList.add("p-1");
            tdEl52.classList.add("table-content");
            trEl5.appendChild(tdEl51);
            trEl5.appendChild(tdEl52);


            tableEl.appendChild(trEl3);
            tableEl.appendChild(trEl4);
            tableEl.appendChild(trEl1);
            tableEl.appendChild(trEl2);
            tableEl.appendChild(trEl5);

            ProfileEl.appendChild(divEl);
            divEl.appendChild(tableEl);
            divEl.classList.add("mt-3","p-5","profile-card","shadow","text-center");
            
            ProfileEl.classList.add("profile","p-3");
            break;
        }
    }
}

if(ProfileEl){
    displayDetails();
}

//user Job Details Display

let num=1;

let userJobDetailsDisplayEl = document.getElementById("userJobDetailsDisplayId");
function getUserJobStatusList(){
    let list=JSON.parse(localStorage.getItem("UserJobStatusList"));
    if(list===null){
        return [];
    }
    return list;
}
function applyJob(job,Jobid){
    let UserJobStatusList=getUserJobStatusList();
    let activeUser=activeUserDetails();
    jobBtnEl=document.getElementById(Jobid);
    jobBtnEl.classList.remove("btn-primary");
    jobBtnEl.classList.add("btn-success");
    jobBtnEl.textContent="Applied";
    let obj={
        user: activeUser[0].username,
        company: job.Name,
        position:job.Position ,
        status : "Applied",
    };
    UserJobStatusList.push(obj);
    localStorage.setItem("UserJobStatusList",JSON.stringify(UserJobStatusList));
}

function checkStatus(UserJobStatusList,activeUser,eachJob){
    let uname=activeUser[0].username;
    for(let job of UserJobStatusList){
        let user=job.user;
        let company=job.company;
        let position=job.position;
        let status=job.status;
        if(eachJob.Name===company && eachJob.Position===position && user===uname && status==="Applied"){
            return status;
        }
    }
    return "Apply";
}

function userJobsDisplay()
{

    let JobList =getaddJobList();
    for(let eachJob of JobList)
    {
        let jname = eachJob.Name;
        let jposition = eachJob.Position;
        let jhirings = eachJob.Hirings;
        let jsalary = eachJob.Salary;
        let jlocation = eachJob.Location;

        let divJobEl=document.createElement('div');

        let tableJobEl=document.createElement('table');

        let trJobEl1=document.createElement('tr');
        let tdJobEl11=document.createElement('td');
        tdJobEl11.textContent="Company Name";
        tdJobEl11.classList.add("table-heading");
        let tdJobEl12=document.createElement('td');
        tdJobEl12.textContent=jname;
        tdJobEl12.classList.add("p-2");
        trJobEl1.appendChild(tdJobEl11);
        trJobEl1.appendChild(tdJobEl12);


        let trJobEl2=document.createElement('tr');
        let tdJobEl21=document.createElement('td');
        tdJobEl21.textContent="Position";
        tdJobEl21.classList.add("table-heading");
        let tdJobEl22=document.createElement('td');
        tdJobEl22.textContent=jposition;
        tdJobEl22.classList.add("p-2");
        trJobEl2.appendChild(tdJobEl21);
        trJobEl2.appendChild(tdJobEl22);


        let trJobEl3=document.createElement('tr');
        let tdJobEl31=document.createElement('td');
        tdJobEl31.textContent="Hirings";
        tdJobEl31.classList.add("table-heading");
        let tdJobEl32=document.createElement('td');
        tdJobEl32.textContent=jhirings;
        tdJobEl32.classList.add("p-2");
        trJobEl3.appendChild(tdJobEl31);
        trJobEl3.appendChild(tdJobEl32);


        let trJobEl4=document.createElement('tr');
        let tdJobEl41=document.createElement('td');
        tdJobEl41.textContent="Salary";
        tdJobEl41.classList.add("table-heading");
        let tdJobEl42=document.createElement('td');
        tdJobEl42.textContent=jsalary;
        tdJobEl42.classList.add("p-2");
        trJobEl4.appendChild(tdJobEl41);
        trJobEl4.appendChild(tdJobEl42);

        let trJobEl5=document.createElement('tr');
        let tdJobEl51=document.createElement('td');
        tdJobEl51.textContent="Location";
        tdJobEl51.classList.add("table-heading");
        let tdJobEl52=document.createElement('td');
        tdJobEl52.textContent=jlocation;
        tdJobEl52.classList.add("p-3");
        trJobEl5.appendChild(tdJobEl51);
        trJobEl5.appendChild(tdJobEl52);


        tableJobEl.appendChild(trJobEl1);
        tableJobEl.appendChild(trJobEl2);
        tableJobEl.appendChild(trJobEl3);
        tableJobEl.appendChild(trJobEl4);
        tableJobEl.appendChild(trJobEl5);

        applyBtnEl=document.createElement('button');
        applyBtnEl.classList.add("btn","btn-primary");
        applyBtnEl.textContent="Apply";
        let jobUniqueid=jposition+eachJob.Jobid;
        applyBtnEl.setAttribute('id',jobUniqueid);


        let UserJobStatusList=getUserJobStatusList();
        let activeUser=activeUserDetails();

        if(checkStatus(UserJobStatusList,activeUser,eachJob)==="Applied"){
            applyBtnEl.classList.remove("btn-primary");
            applyBtnEl.classList.add("btn-success");
            applyBtnEl.textContent="Applied";
        }
        else{
            if(applyBtnEl){
                applyBtnEl.onclick=function(){
                    applyJob(eachJob,jobUniqueid);
                }
            }
        }
        divJobEl.appendChild(tableJobEl);
        divJobEl.appendChild(applyBtnEl);
        divJobEl.classList.add("m-3","shadow","col-5","px-5","py-3");
        userJobDetailsDisplayEl.appendChild(divJobEl);
    }
}
if(userJobDetailsDisplayEl){
    userJobsDisplay();
}

//FEEDBACK

let feedbackTextEl=document.getElementById("feedbackTextId");
let feedbackSubmitEl=document.getElementById("feedbackSubmit");
function getFeedbackList(){
    let list=JSON.parse(localStorage.getItem("feedbackList"));
    if(list===null){
        return [];
    }
    return list;
}
if(feedbackSubmitEl){
    let feedbackList=getFeedbackList();
    feedbackSubmitEl.onclick=function(){
        if(feedbackTextEl.value===null){
            alert("Empty Feedback Not accepted")
        }
        else{
            feedbackList.push(feedbackTextEl.value);
            feedbackTextEl.value="";
            localStorage.setItem("feedbackList",JSON.stringify(feedbackList));
        }
    };
}

//ADMIN FEEDBACK

let adminFeedbackDisplayEl=document.getElementById("adminFeedbackDisplayId");
function displayFeedback(){
    let feedbackList=getFeedbackList();
    for(let feed of feedbackList){
        let El=document.createElement('div');
        let pEl=document.createElement('p');
        pEl.textContent=feed;
        El.appendChild(pEl);
        El.classList.add("shadow","m-2","p-3");
        if(adminFeedbackDisplayEl){
            adminFeedbackDisplayEl.appendChild(El);
        }
    }
}

displayFeedback();