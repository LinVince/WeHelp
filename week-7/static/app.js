async function getusername(username){	
	var requestURL = "http://127.0.0.1:3000/ap/member?username=" + username;
	const getData =  await fetch(requestURL);
	return getData.json();
};


const username_btn = document.getElementById('search_button');

username_btn.addEventListener('click', function(){
	const username_input = document.getElementById('search_input');
	const display_name= document.getElementById('display_name')
	username = username_input.value;
	getusername(username).then((data) => {
		search_name = data.data.name;
		display_name.textContent = search_name;
		
		
});
});
	
