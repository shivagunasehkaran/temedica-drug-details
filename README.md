# Temedica drug details : Sample application

This Temedica drug details app allows you to see lot of drugs list with dieases, name, released date and description.

Please go ahead and play around  :)

## Covered :

  - Fetches list of drug details from local json file called (drugs.json) and displays a list of drug details.
  - Showing drug details in Item list	(dieases, name, released date and description)
  - Project working on both Android and iOS
  - Project running on latest RN 0.66.4.
  - I have created app UI as per some best pratice approach.
  - Not used any external library. Everything managed by own.

## Not Covered :  Willing to implement in the future.

  - I haven't included fetch library to retrieve data's from local json  :(
  - Unable to cover 100% test cases, getting some failures. (will cover in future)

## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture && tried TDD approach)
  - **Execution** - App runs successfully in both Android and iOS
  - **Testability** - Used **Jest** for Unit testing and **Enzyme** for component testing.
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:
  
  - react (17.0.1)
  - react-native (0.64.2)
  - jest (26.6.3) - devDependencies
  - enzyme (3.11.0) - devDependencies
  - enzyme-adapter-react-16 (1.15.6) - devDependencies

## Thinking & Decisions :

  - Since, No pagination given in Local json file (API). I can add pagination after every 20 records in future.
  - Could use **UseMemo** for child render item but based on API, data's are changing every time you refresh. 
    Understood rerender will happen everytime, so better not to use **UseMemo** (According to the coding standard, If the component isn’t heavy and usually renders     with different props, most likely not to use memoizations, 
    Using the following rule of thumb: don’t use memoization if you can’t quantify the performance gains.)
  - No error alerts added, because handled all the NULL check in all child components.
  - Created ColourPalette for maintaining colors
  
## outputs :
          
  ## Screenshots of iOS
  
   <img src="https://user-images.githubusercontent.com/11419839/149998571-b750d6ca-65c4-4976-a7dd-2760771583f5.png" width="400" height="700">
      <img src="https://user-images.githubusercontent.com/11419839/149998580-8de79fe3-6378-4794-847b-09b1e85afdf6.png" width="400" height="700">
         <img src="https://user-images.githubusercontent.com/11419839/149998589-da60a03e-7346-4ecc-92da-2d064c1e00db.png" width="400" height="700">
            
   ## Screenshots of Android attached
   
   <img src="https://user-images.githubusercontent.com/11419839/149998737-dc609e1b-f0c5-46a9-81df-5ed4ec98a06b.png" width="400" height="700">
      <img src="https://user-images.githubusercontent.com/11419839/149998744-37def309-e85c-4848-ad94-9f6061f19560.png" width="400" height="700">
          
## Happy coding .....
