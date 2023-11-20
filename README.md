# PollingAPI

This is a Polling API which is an Open Application. 
It is for creating a Question and Adding different options to it which can be voted by any user.

## We can use Postman to test these API's

### API to Create a question: 
        pollingapi-vsfc.onrender.com/questions/create

### APT to Add options to a question: 
        pollingapi-vsfc.onrender.com/questions/:id/options/create

### APT to Add a vote to an option of question: 
        pollingapi-vsfc.onrender.com/options/:id/add_vote

### API to Delete an Option: 
        pollingapi-vsfc.onrender.com/options/:id/delete

### API to Delete a question: 
        pollingapi-vsfc.onrender.com/questions/:id/delete

### API to View a question with it’s options and all the votes given to it: 
        pollingapi-vsfc.onrender.com/questions/:id
        
        
Example:-
```json
{
  "id": 1,
  "title": "Who is your favorite from the Ninjas Mentors",
  "options": [
    {
      "id": 1,
      "text": "Aakash Tyagi",
      "votes": 100,
      "link_to_vote": "https://pollingapi-vsfc.onrender.com/options/64831faf5eda99247f6dcd65/add_vote"
    }
  ]
}
