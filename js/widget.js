'use strict';

let data = 'data/employees.json';

//create ul with class 'bulleted' and add it to html
let ul = document.createElement('ul');
ul.classList.add('bulleted');
let addUl = document.querySelector('#employeeList').append(ul);

fetch(data)
	.then(
		function (response) {
			if (response.status !== 200) {
				return;
			}

			
			response.json().then(function (data) {

				data.forEach(element => {
					let statusInoffice = element.inoffice;
					if (statusInoffice == true) {
						// create li class="in"
						let li = document.createElement('li');
						li.classList.add('in');
						document.querySelector('.bulleted').append(li);
						li.innerHTML = element.name;
					} else {
						// create li class="out"
						let li = document.createElement('li');
						li.classList.add('out');
						document.querySelector('.bulleted').append(li);
						li.innerHTML = element.name;
					}

				});

			});
		}
	)










console.log(document);



