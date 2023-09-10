async function fetchData(url){
    console.log(url);
    const response = await fetch(url);
    if(!response.ok){
        console.log(response.status);
    }
    const json = await response.json();
    const data = json.data.map(question => {
        const {level,title,answers} = question;
       return{
           level,
           title,
           answers,
           isAnswered:false,
           isCorrect:false,
           submittedAnswer:'',
       }
    });
    console.log(data);
    return data;
}

export default fetchData;