# Massamty

Massamty is a web-based accounting application. It is capable of performing various common accounting tasks such as

- Creating, editing, and deleting accounts in a chart of accounts
- Posting and journalizing entries
- Managing multiple users of various roles such as accountant, manager, and administrator

In addition to these functionalities, the application also provides users with an automatically generated ledger for each account and an event log to track when new accounts are created or when existing accounts are edited.

## Running the Application

To run the application, you must have node installed. You can download the latest version of node using the following website: https://nodejs.org/en

Next, you must clone the git repository:

`git clone git@github.com:SamCorella/massamty.git`

Then, change directories into the "accounting-app" folder:

`cd accounting-app`

To install the necessary node modules, the following command will automatically install all dependencies:

`npm install`

Lastly, you can start the application using the following npm command:

`npm start`

## User Manual

### Creating a New User

The first screen that any user entering the application sees is the sign in screen. If you do not have an existing account in the system, you must create one. To do so, click the link below the sign in button that reads 'Don't have an account? Sign Up'

This will take you to a new screen titled 'Sign Up'. Enter your information in each box and select a User Type, which is set to 'Accountant' by default. Then, click the Sign Up button. This will register you as a user in the system and return you to the Sign In screen.

### Sign in

To enter the system, you must be a registered user. Enter your email address and password, then click the Sign In button. This will take you to the Home screen.

### Forgot Password?

If you are unsure what password is used to sign in to your account, you may try clicking the link that reads 'Forgot Password?'. Clicking this link takes you to a new screen that requests the email address and user ID of your account as a security measure. If these fields are verified, then clicking the Reset Password button will take you to a new screen where you may reset your password. Enter a new password and Re-Enter your password to confirm, then click the Reset Password button. This will take you back to the Sign In screen.

### Home Screen

The Home screen is where all features of the system can be accessed. At first glance, you will see the Logo, Dashboard, and profile icon at the top of the screen, and the Chart of Accounts at the center of the screen. Below all of this, a section of the page displays Financial Ratios related to the accounts stored in the Chart of Accounts.

### Chart of Accounts

The Chart of Accounts is the central component of the application. All information regarding every account in the system can be accessed through the Chart of Accounts.

### Creating, Editing, and Deleting Accounts

To begin, create an account by pressing the "Add Account" button. This will create a new row directly within the chart of accounts where the corresponding information can be entered. Once you have entered all the desired information, click the save icon to store it in the chart of accounts or click the 'X' button to cancel the operation. Each account is automatically created with an 'Actions' column on the far right.

To edit an account, click the Pencil icon in the Actions column. This will cause the row to enter Edit Mode, where the account's details can be modified. After editing an account, be sure to click the save icon to confirm the new details or click the 'X' button to cancel.

Lastly, to delete an account, click the Trash icon in the Actions column.

### Journal Entries

Once the Chart of Accounts is populated with accounts, you may wish to create journal entries using these accounts. To do so, click the Create Journal Entry button.

This will take you to a new screen for creating journal entries. Begin by selecting the first account from the list of accounts and enter the Debit value. **Note that Account 1 corresponds to the Debit value.**

Next, select a second account and enter the Credit value. **Note that Account 2 corresponds to the Credit value**

Lastly, enter the date of the transaction, then press submit to post the entry or press cancel to return to the Home screen.

### Ledger

To view the Ledger for a particular account, click the Eye icon in the Actions column of the Chart of Accounts. If the selected account was impacted by any journal entries, either as Debit or Credit, then those journal entries will appear in its Ledger.

### Dashboard

Clicking 'Dashboard' in the bar at the top of the screen will take you to a new screen for viewing all the users registered in the system. In this Dashboard, you can view a user's name, email, and role. To return to the Home Screen, you can always click the Logo 'Massamty'.

### Log out

To log out from the system, click the profile icon at the top right of the screen and click 'Log Out' from the dropdown menu. This will return you to the Sign In screen.
