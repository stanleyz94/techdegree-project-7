

// Traffic Line Chart

const hourlyChart = document.querySelector('.traffic-navigation ul').children[0];
const dailyChart = document.querySelector('.traffic-navigation ul').children[1];
const weeklyChart = document.querySelector('.traffic-navigation ul').children[2];
const monthlyChart = document.querySelector('.traffic-navigation ul').children[3];

var trafficCanvas = document.getElementById('traffic-chart').getContext('2d');




// Hourly
const hourlyData = [3, 7, 12, 19, 9, 1, 8, 10, 15, 12, 18];
const hourlyLabel = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

// Daily

const dailyData = [10, 7, 9, 23, 19, 23, 8];
const dailyLabel = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];


// Weekly

const weeklyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500];
const weeklyLabel = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"];


// Monthly

const monthlyData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3200];
const monthlyLabel = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//





var chart =  new Chart(trafficCanvas, {

        type: 'line',  
        data: {
            labels: ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
            datasets: [{
                backgroundColor: 'rgba(139,134,209,0.25)',
                borderColor: '#8b86d1',
                borderWidth: 1,
                pointBackgroundColor: 'white',
                pointBorderColor: '#8b86d1',
                pointBorderWidth: '3',
                pointRadius: '7',
                lineTension: '0',           
           
                     
                data: [3, 7, 12, 19, 9, 1, 8, 10, 15, 12, 18]
        
        
            }]
        
        },
        options: {
            maintainAspectRatio: true,
            responsive: true,
            animation: {
                duration: 0
            },
            scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                 }
                }]
            },
            legend: {
                display: false
              }
        }
       
    });






    function updateChart(labels, data) {
        chart.data.labels = labels;
        chart.data.datasets[0].data = data;
        chart.update();
    }
    
    
    

hourlyChart.addEventListener('click', () => {
        updateChart(hourlyLabel, hourlyData);
    
    })
    
dailyChart.addEventListener('click', () => {
    updateChart(dailyLabel, dailyData);

})

weeklyChart.addEventListener('click', () => {
    updateChart(weeklyLabel, weeklyData);

})

monthlyChart.addEventListener('click', () => {
    updateChart(monthlyLabel, monthlyData);

})



///////////// Daily Traffic Chart

const dailyCanvas = document.getElementById("daily-chart").getContext('2d');


var chart2 = new Chart(dailyCanvas,{
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#8b86d1'

        }]





    },
    options: {
        legend: {
            display: false
          }
    }
   


});


///////////// Mobile Users Chart


const mobileCanvas = document.getElementById("mobile-chart").getContext('2d');



var chart3 = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: {
        labels: [
          'Phones',
          'Tablets',
          'Desktop'
        ],
        datasets: [{
          label: 'Dataset',
          data: [100, 50, 300],
          backgroundColor: [
            '#67bdce',
            '#6ece67',
            '#8b86d1'
          ],
          hoverOffset: 4
        }]
      },
    options: {
      layout: {
            

      },  
      legend: {
            position: 'right',
            labels: {
            boxWidth: 24,
            fontStyle: 'bold',
            padding: 25,
            fontSize: 18,
            
           },
           
        }  
    }

});



///////////////////////////// Notifications



const svgclick = document.querySelector('svg');

svgclick.addEventListener('click', () => {
  
   
  const toggleMenu = document.querySelector('.menu');
  toggleMenu.classList.toggle('active')
  
})


const removeNotification = document.querySelectorAll('.menu ul li span');
const removeNotificationGreen = document.querySelector('.notification-green-bell');

const hideNotification = document.querySelector('.menu');




for(let i=0; i < removeNotification.length; i++){
    removeNotification[i].addEventListener('click', (event) =>{
        
        let ul = event.target.parentNode.parentNode;
        let li = event.target.parentNode;
    
        ul.removeChild(li)
       
        if(ul.children.length < 1){
            
            hideNotification.style.display = "none";
            removeNotificationGreen.style.display = "none";
        }
    }
   


   
    )
}



//// Message Form



const users = ['Victoria Chambers','Dale Byrd','Dan Oliver','Dawn Wood'];
const userInput = document.getElementById('s-user');


userInput.addEventListener('input', (e)=>{

    let usersArray = [];

    if(e.target.value){
        usersArray = users.filter(user => user.toLowerCase().includes(e.target.value));
        usersArray = usersArray.map(user => `<li>${user}</li>`);
    }

    showUserArray(usersArray);
    document.querySelector('.results').classList.add("active");
    selectFromList();
 

    
    if(userInput.value.length == 0){
        document.querySelector('.results').classList.remove("active");
    }


});


function createResults() {

    var ul = document.createElement("ul");
    var resultsContainer = document.querySelector('.results');
    resultsContainer.appendChild(ul);  

}



function selectFromList() {

    let li = document.querySelectorAll('.results ul li');


    for (let i=0; i < li.length; i++ ){
        li[i].addEventListener('click', (e) =>{
               
        userInput.value = li[i].textContent;
        li[i].parentNode.parentNode.removeChild(li[i].parentNode);
        createResults();
    });}
     

}



function showUserArray(usersArray){

    const html = !usersArray.length ? '' : usersArray.join('');
    document.querySelector('.results ul').style.display = "inline";
    document.querySelector('.results ul').innerHTML = html;
}



const buttonSend = document.getElementById('button-send');
const messageInput = document.getElementById('messageField');


buttonSend.addEventListener('click', () => {

    if(userInput.value === "" && messageInput.value === ""){
        alert("Please fill out user and message fields before sending");
    }
    else if (userInput.value === ""){
        alert("Please fill out user field before sending");
    }
    else if (messageInput.value === ""){
        alert("Please fill out message field before sending");
    }
    else {
        alert(`Message successfully sent to: ${userInput.value}`);
    }

})



/// LOCAL STORAGE

const emailSwitch = document.getElementById('email-togBtn');
const profileSwitch = document.getElementById('profile-togBtn');


const cancelButton = document.getElementById('button-cancel');
const saveButton = document.getElementById('button-save');





function addingCheck (x) {

x.addEventListener('click', () => {
    
    if(x.checked){
        x.setAttribute('checked', true);

      } else {
        x.setAttribute('checked', false);

        
      }


});

}





addingCheck(emailSwitch);
addingCheck(profileSwitch);



const select = document.querySelector('select');





function save() {

    var inputs = document.querySelectorAll('input[type="checkbox"]');
    var arrData = [];
    var selectedTimezone = select.options[select.selectedIndex].value;

    inputs.forEach(function(input){

        arrData.push({

            id: input.id,
            checked: input.checked
        });

    });


    localStorage.setItem('timezone', selectedTimezone);
    localStorage.setItem('inputs', JSON.stringify(arrData));
    console.log(JSON.stringify(arrData));
}



function load(){
    var inputs = JSON.parse(localStorage.getItem('inputs'));
    var options = localStorage.getItem('timezone'); 
    
    
    if(inputs){
    inputs.forEach(function (input){

        document.getElementById(input.id).checked = input.checked;
    });

}
    if(options){
    select.value = options

}

    

}




saveButton.addEventListener('click', () => {
    save();

});



cancelButton.addEventListener('click', () => {

    location.reload();
    localStorage.clear()

});

load();



function staysActive(a) {

    items = document.querySelectorAll('.traffic-navigation ul li a');
    
    for(let i=0; i < items.length; i++)
        if(items.length)
        {
        items[i].className = 'stays';
        }
    a.className = 'stays active';
}


