// ---------------------------------------------------- PROJECT DESIGN DOCUMENT ------------------------------------------------------------>
// PROBLEM STATEMENT : Event organizers face difficulty in efficiently creating and managing customized conference tickets for multiple attendees, as existing approaches are often manual, fragmented, and time-consuming.
//                   : This lack of streamlined tools for inputting details, generating tickets, previewing them in real time, and exporting them easily leads to poor user experience and reduced productivity.
//                   : General Template : [WHO] faces difficulty in [WHAT PROBLEM], because [WHY it is inefficient], resulting in [IMPACT].

// GOAL/VISION : To enable event organizers and participants to efficiently create and manage conference tickets by providing event and attendee details through an intuitive interface, with real-time preview and seamless export functionality, so that ticket generation becomes fast, scalable, and user-friendly.
//             : General Template : To enable [WHO] to [DO WHAT], using [HOW] so that [OUTCOME].

// USERS & USE CASES : Users : Event Organizers - Individuals responsible for creating and managing events.
//                           : Attendees / Participants - Users who register for events and receive generated tickets.
//                   : Use cases : Event Organizer - Create an event by entering details (name, date, venue, timings)
//                                                 - Share or provide access to the event for registration
//                                                 - View generated tickets (optional enhancement)
//                               : Attendees - Register for an event by entering personal details (name, email, GitHub, etc.)
//                                           - Generate a personalized ticket upon registration
//                                           - Preview the generated ticket in real time
//                                           - Download or store the ticket for future use

// ---------------------------------------------------- FEATURES ------------------------------------------------------------>
// CORE FEATURES (MVP) : Thinking - If I remove this feature, does the product still work?
//                                - Is this essential to solve the core problem?
//                                - Can the user complete the main flow without it?
//                     : 1) Event Creation : Event organizers can create events by providing details such as name, date, venue, and timings.
//                     : 2) Attendee Registration : Attendees can register for a specific event by entering their details (name, email, GitHub, etc.).
//                                                : Each attendee is associated with a particular event.
//                     : 3) Ticket Generation : Upon registration, a personalized ticket is generated dynamically for the attendee.
//                     : 4) Real-Time Ticket Preview : The generated ticket is displayed instantly for verification.
//                     : 5) Ticket Download : Users can download the generated ticket as an image or PDF.

// ENHANCED FEATURES (PHASE 2+) : 1) Authentication & User Management - Allow users to sign up and log in
//                                                                    - Separate roles for event organizers and attendees
//                                                                    - Enable organizers to manage their own events
//                              : 2) Event Management Dashboard - View, edit, and delete created events
//                                                              - Track number of registrations per event
//                              : 3) Ticket Management - Allow users to re-download previously generated tickets
//                                                     - Store ticket history for attendees
//                              : 4) QR Code Integration - Generate QR codes for each ticket
//                                                       - Enable ticket verification at event entry
//                              : 5) Multiple Ticket Templates - Provide different design themes for tickets
//                                                             - Allow customization of layout and styles
//                              : 6) Email Integration - Send generated tickets directly to attendee emails
//                                                     - Confirmation emails after registration
//                              : 7) Cloud Storage Integration - Store event and ticket data in cloud databases
//                                                             - Enable persistent access across sessions
//                              : 8) Search & Filtering - Search events by name/date
//                                                      - Filter attendees per event
//                              : 9) Analytics Dashboard - Show event statistics (registrations, downloads)
//                                                       - Basic insights for organizers
//                              : 10) Mobile Responsiveness & UI Enhancements - Optimize UI for mobile devices
//                                                                            - Improve overall user experience and design
//                              : 11) Data Security & Validation - Implement input validation and sanitization to prevent malicious data entry
//                                                               - Protect APIs against common vulnerabilities (e.g., SQL Injection, XSS)
//                                                               - Secure user data through proper storage practices
//                                                               - Use HTTPS for secure data transmission
//                                                               - Implement authentication and authorization for secure access control
//                                                               - Encrypt sensitive data where necessary
//                                                               - Apply rate limiting to prevent abuse
//                              : 12) Final Deployment

// ---------------------------------------------------- HIGH LEVEL DESIGN (HLD) ------------------------------------------------------------>
// High Level Design Thinking : Understand problem, List requirements & Pick simplest known tool that solves it
//                            : Example : Need UI → frontend, Need logic → backend & Need storage → database
//                                      : Map needs - Frontend → React and other options. Which one will be the best, efficient & resource friendly and why.
//                                                  - Backend → Node.js and other options. Which one will be the best, efficient & resource friendly and why.
//                                                  - Database → MongoDB / simple storage and other options. Which one will be the best, efficient & resource friendly and why.

// TECH STACK (HLD) : 1) Frontend : Plain JS / React - For building dynamic UI and handling user interactions
//                  : 2) Backend : Node.js (Express) - For handling event creation, registration, and ticket generation logic
//                  : 3) MongoDB / In-Memory / local Json - To store event and attendee data
//                  : 4) Other Tools - File handling / libraries for ticket generation etc.

// USER & DATA FLOW (HLD) : Event Organizer → Creates Event → Stored in DB or whatever you use.
//                        : Attendee → Opens Event → Submits Details → Stored in DB or whatever you use.
//                        : System → Generates Ticket → Sends to UI → User Downloads or whatever you use.

// ARCHITECTURE (HLD) : Client -> Backend -> Database (Standard r Tier Architecture)

// NON-FUNCTIONAL REQUIREMENT : If it affects HOW system behaves → NFR & If it adds WHAT system does → Feature (FR)
//                            : Scalability - The system should be able to handle multiple events and a growing number of attendees efficiently.
//                                          - Backend and database design should support increasing data without major changes.
//                            : Performance - Ticket generation and preview should be fast and responsive.
//                                          - API responses should be optimized for minimal delay.
//                            : Maintainability - Code should be modular and well-structured for easy updates and debugging.
//                                              - Separation of concerns between frontend, backend, and database layers.
//                            : Reliability - The system should handle invalid inputs and failures gracefully.
//                                          - Ensure consistent behavior during ticket generation and download.
//                            : Security (Basic for MVP) - Validate and sanitize user inputs.
//                                                       - Prevent common vulnerabilities (XSS, injection attacks).

// ---------------------------------------------------- LOW LEVEL DESIGN (LLD) ------------------------------------------------------------>
// Low Level Design Thinking : Feature → Steps → Functions → Components
//                           ; Design LLD, for the current features you are working on, not for the entire system.

// FUNCTIONAL BREAKDOWN (LLD) : Event Creation - Accept event details from user (name, date, venue, timings)
//                                             - Validate input data
//                                             - Send data to backend API
//                                             - Store event in database
//                                             - Return success response
//                            : Attendee Registration - Accept attendee details (name, email, GitHub, etc.)
//                                                    - Validate input fields
//                                                    - Associate attendee with selected event (eventId)
//                                                    - Store attendee in database
//                            : Ticket Generation - Fetch event and attendee details
//                                                - Generate ticket layout dynamically
//                                                - Populate ticket with user and event data
//                            : Real-Time Preview - Render ticket UI instantly on frontend
//                                                - Update preview when data changes
//                            : Ticket Download - Convert ticket UI into image/PDF
//                                              - Trigger download for user

// COMPONENTS & MODULES BREAKDOWN (LLD) : It helps us with, how your codebase is organized.
//                                      : What files/folders will exist?
//                                      : What responsibilities each part has?
//                                      : And how things are separated
//                                      : 

// ---------------------------------------------------- ENGINEERING CONSIDERATIONS ------------------------------------------------------------>
// EDGE CASES :
// TRADE OFFS : Authentication is not included in the MVP to keep the system simple and focused on core functionality. Users interact with the system through event-based flows rather than account-based access.

// ---------------------------------------------------- FUTURE & LEARNING ------------------------------------------------------------>
// KEY CONCEPTS & UNDERSTANDING : "One thing can belong to multiple headers… it depends on us" - There is NO "perfect" categorization for anything, apart from facts and literal definitions, it depends your own mental model and how you interpret it.
//                              : What actually matters is : Not "Which category it belongs", But "Have you thought about it?"
//                              : Professionals don't overthink categorizations - They just ensure that, it is mentioned somewhere, is logically placed & understandable.
// FUTURE SCOPE :