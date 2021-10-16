
// showhide

const showhide = document.querySelector('#showHide');
console.dir(showhide);


showhide.addEventListener('click',peubah );


function peubah () {
    const ubah = document.querySelector('form');
    
        if(ubah.style.display === "none"){
            ubah.style.display = "block";
            return showhide.textContent = "Hide Form Add New Student";
        }
        else {
            ubah.style.display = "none";
            return showhide.textContent = "Show Form Add New Student";
        }


};



// add student 
const formAddStudent = document.querySelector('form');
formAddStudent.addEventListener('submit', InputStudent);
function InputStudent(event) {
    event.preventDefault();

    //get user input
    let Id = document.querySelector('#InputStudentId');
    let Name = document.querySelector('#FullName');
    let Gender = document.getElementsByClassName('form-check-input');
    let gender, i;
    for (i=0; i<2; i++){
        if (i = Gender[0].checked){
            gender = document.querySelector('#flexRadioDefault1');
        }
        else if (i = Gender[1].checked)
        {
            gender = document.querySelector('#flexRadioDefault2')
        }
    }
    Gender = gender;

    let Faculty = document.querySelector('#Faculty');
    let Prodi= document.querySelector('#Prodi');
    
    console.log(Id.value);
    console.log(Name.value);
    console.log(Gender.value);
    console.log(Faculty.value);
    console.log(Prodi.value);

//element tr & tr
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');

    

    //add element to the parent table element
    const tdText1 = document.createTextNode(Id.value);
    const tdText2 = document.createTextNode(Name.value);
    const tdText3 = document.createTextNode(Gender.value);
    const tdText4 = document.createTextNode(Faculty.value);
    const tdText5 = document.createTextNode(Prodi.value);
    
    
    td1.appendChild(tdText1);
    td2.appendChild(tdText2);
    td3.appendChild(tdText3);
    td4.appendChild(tdText4);
    td5.appendChild(tdText5);

   
    const table = document.querySelector('#OurStudent');
    table.appendChild(tr);
    table.appendChild(td1);
    table.appendChild(td2);
    table.appendChild(td3);
    table.appendChild(td4);
    table.appendChild(td5);
   
   
    Id.value = '';
    Name.value = '';
    Gender.value = '';
    Faculty.value = '';
    Prodi.value = '';
    
}

