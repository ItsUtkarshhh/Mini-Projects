// Here we will talk about the problem, which we are facing and will solve it through proper thinking about solutions, engineering which we can apply and tradeofs and all in depth!
// Problem : We want a system, where someone can input there name, email, github & can also upload there image! And then eventually can get a ticket generated with those values printed on it! And then the person can save that image in form of PDF, PNG or JPEG/JPG!

// Breaking down the problem :
// 1. In the beginning, you just need a form type of UI, where you can input your values of name, email & github and also can input your image.
// 2. Now, after input of the user for the above details, the data provided needs to be get printed on a ticket, so for that we will be making another UI which is basically a final ticket.
// 3. But, that UI will not come out of thin air, right? So we need another HTML page for that too, so we will make it simply a final ticket UI where we will simply print those values right?
// 4. Now the main part of the problem is : How will we send the data from first HTML page to second HTML page?
// 5. We can have multiple ways to do this : What is common between the two HTML pages? URL params & browser's storage right? Hence, we can use it to transfer data from one page to other!
// 6. Now, lets start with first local storage : What is a local storage? 

// Problem Understanding & Initial Approach : We are trying to build a system where a user can input their name, email, GitHub username, and upload an image, and based on this input, a ticket gets generated with all these details printed on it. The user should also be able to download this ticket as a PDF or image (PNG/JPG).
// Breaking Down the Problem :
// 1. Input Layer (Form UI) - First, we need a UI where the user can enter their details : Name, Email, Github, Image - This is essentially a form-based interface.
// 2. Output Layer (Ticket UI) - After the user provides the input, we need to display these values on a ticket-like design. So we will create another UI which represents the final ticket, where all the user-provided data will be rendered.
// 3. Separation of Pages - This ticket UI will not just magically appear — it needs to exist somewhere. So, we will create a separate HTML page that is responsible for : Receiving the data & Rendering it in a ticket format.
// 4. Core Problem - Data Transfer Between Pages - Now comes the main engineering challenge : How do we transfer data from the first HTML page (form) to the second HTML page (ticket)? Because : Each page load is independent & There is no shared state by default
// 5. Possible Ways to Transfer Data - We start thinking in terms of what is common between both pages. Two major options come to mind : URL Parameters → Data can be passed through the URL
//                                                                                                                                     : Browser Storage → Data can be stored in the browser and accessed from another page
//                                                                                                                                     : Other methods can include, React state or Backend & Databases (No need to make it that complex right now)
//                                                                                                                                     : Right now, These become our initial approaches to solve the problem.
// 6. Starting with Local Storage - Among the available options, we begin exploring local storage as a potential solution. So the next step is to understand : What exactly is local storage, how it works, and whether it fits our use case.
// 7. Now, as we are using the local storage of the browser, so we will simply take the data as the input from the user, and as it will be in a string format, so we will store the data into the local storage, but the catch is how to save image in the local storage! Here is where the things start getting interesting!
// 8. Now, see, local storage is only capable of storing string into its storage space, and that too in form of key value pairs, but what is an image? Its a binary file! not a string, which needs to get converted into a raw bytes.
// 9. Means, the main problem is, binary file cannot get stored in the local storage due to the storage type as string. So it means, we need to process and convert the binary file into a string to make it store to the local storage!
// 10. Mistakes what you might do, trying to do this "localStorage.setItem("image", file);" which will result in storing - "[object File]" and now if you think you are smart and try to do localStorage.getItem("image") you will get a string - "[object File]"
// 11. So what we can actually do, we will actually convert this image into a string - Now we need a base64 encoding of the image, which will help to convert the image binary data into a string.
// 12. So, now we can store that string converted image into a the local or session storage, that's upto me, if you know about local storage and session storage, what are there differences! Right now we will store this string into the local storage!
// 13. Now, we will simply navigate to the new html page and will get the stored values from the local storage and will simply render it on the ticket UI

// After this, the rest you have to just convert this thinking into Javascript code!

// Enhancements -
// 1. Add email, github username validations - by asking to enter OTP that are sent to the their respective IDs
// 2. Display the compressed uploaded image
// 3. User cannot click on generate ticket button, until does not satisify all the fields are correctly updated
// 4. User cannot simply navigate to the final ticket UI page
// 5. In the ticket UI page the user will also get a QR code, which will have the ticket ID for verification
// 6. Optimize the code and use latest modern ways
// 7. Ensure good memory management
// 8. Provide security from any possible security threats.
// 9. Scale this ticket generator upto the real world level
// 10. If the user does not input an image of there's then we can simply show some avatars instead on the place of image.