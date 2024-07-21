let timeout;
// call onSum function after 3 seconds. In case user triggers callSum before 3 seconds cancel earlier plan (debounce) and start 3sec time again.
// If user dint trigger callSum for 3 sec (assuming user action is done)  call onSum and send out a request to backend
window.callSum = () => {

  clearTimeout(timeout);
  //without clearTimeout it calls the api after 3 seconds but it wont debounce any calls.
  timeout = setTimeout(() => {
    window.onSum();
  }, 3000);
}
window.onSum = async () => {
  const value1 = document.querySelector("#value1").value;
  const value2 = document.querySelector("#value2").value;
  const divBox = document.querySelector("#sum");
  const response = await axios.get("https://sum-server.100xdevs.com/sum?a=" + value1 + "&b=" + value2);
  console.log(response);
  divBox.innerHTML = response.data;
}
