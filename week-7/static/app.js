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
	
async function changeusername(username){	
	var requestURL = "http://127.0.0.1:3000/ap/member";
	var obj = {"name": username};
	//Please write the following line to set your jsondata..otherwise....
    json_data = JSON.stringify(obj);
	const get_response = await fetch(requestURL,{
		method:'PATCH',
		headers:{'Content-type':'application/json'},
		body:json_data,
	});
	return get_response.json();
	
	/*.then(function(response) {
            console.log(response.text());
            console.log(response.text());
          });*/

}

const change_name_btn = document.getElementById('change_name_button');

change_name_btn.addEventListener('click', function(){
	const change_name_input = document.getElementById('change_name_input');
	const change_name_result = document.getElementById('change_name_result');
	const newname = change_name_input.value;
	changeusername(newname).then((data) => {
		if (data['ok'] == true){
			change_name_result.textContent = '更新成功';
	}else{change_name_result = '更新失敗'}
});
});
	/*.then((response) => {
		console.log('hellooooo', response)
		if (){
		change_name_result.textContent = '更改成功';
		}else{change_name_result.textContent = '更改失敗';}
});*/