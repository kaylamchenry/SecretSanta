// Function to make a synchronous fetch request
async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // API endpoint
  const apiUrl = 'https://docs.google.com/spreadsheets/d/1ms4HNzsyeRu7wMS0J586ig_-gB6gCIGN9Y8Z8uK7hOA/edit?resourcekey#gid=1235144780';
  
  // Synchronous fetch request
  const responseData = fetchData(apiUrl);
  
  // Process the response and generate HTML template
  responseData.then(data => {
    let result = '';
  
    // Iterate through the data array
    data.forEach(entry => {
      result += `
        <div class="col-md-4 col-sm-6 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="${entry.imageURL}" alt="">
            </div>
            <div class="detail-box">
              <h5>${entry.Name}</h5>
              <h6 class="">${entry.Groupname}</h6>
            </div>
          </div>
        </div>`;
    });
  
    // Display the result
    console.log(result);
  });
  