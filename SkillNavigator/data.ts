import {
  ArtsandCreativeLogo,
  BussinessLogo,
  CommunicationMediaLogo,
  CourseImage,
  HealthLogo,
  MusicLogo,
  PersonalDevLogo,
  PsychologyLogo,
  courseLogo,
} from '../util/constant/images';
export const data = [
  {
    id: 1,
    mainTitle: 'IT & Development',
    mainImage: courseLogo.IT,
    mainCourses: [
      {
        title: 'Python',
        image: courseLogo.Python,
        courses: [
          {
            courseTitle: 'Python: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/python/',
          },
          {
            courseTitle: 'Python: From Real Python',
            courseImage: CourseImage.RealPython,
            level: 'Intermediate',
            link: 'https://realpython.com/',
          },

          {
            courseTitle: 'Python: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/python-programming-language/',
          },
          {
            courseTitle: 'Python: From Python',
            courseImage: CourseImage.Python,
            level: 'Advanced',
            link: 'https://www.python.org/doc/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'JavaScript',
        image: courseLogo.JavaScript,
        courses: [
          {
            courseTitle: 'JavaScript: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/js/',
          },
          {
            courseTitle: 'JavaScript: From Codecademy',
            courseImage: CourseImage.CodeAcadamy,
            level: 'Beginner',
            link: 'https://www.codecademy.com/learn/introduction-to-javascript',
          },
          {
            courseTitle: 'JavaScript: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/javascript/',
          },
          {
            courseTitle: 'JavaScript: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/javascript-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Web Development',
        image: courseLogo.WebDevelopment,
        courses: [
          {
            courseTitle: 'Web Development: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/tutorials/index.php',
          },
          {
            courseTitle: 'Web Development: From PluralSight',
            courseImage: CourseImage.Pluralsight,
            level: 'Beginner',
            link: 'https://www.pluralsight.com/courses/web-development-intro?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-apac-in-dynamic&utm_content=free-trial&gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBp1HNeiZUZMH0UKgEPv18jjZ6vEEwvdU7GLDQw5FBKjeijIm8GBCgxoC3tMQAvD_BwE',
          },
          {
            courseTitle: 'Web Development: From FreeCodeCamp',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Intermediate',
            link: 'https://www.freecodecamp.org/news/html-css-and-javascript-explained-for-beginners/',
          },
          {
            courseTitle: 'Web Development: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/web-development/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Data Science',
        image: courseLogo.DataScience,
        courses: [
          {
            courseTitle: 'Data Science: From PluralSight',
            courseImage: CourseImage.Pluralsight,
            level: 'Beginner',
            link: 'https://www.pluralsight.com/cloud-guru/courses/data-science-basics?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-apac-in-dynamic&utm_content=free-trial&gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBrJtqHoP8imHqkhOo1fe5hOwbux3ezMm-fYRwjyyhouldRgFhnP5GxoCpN8QAvD_BwE',
          },
          {
            courseTitle: 'Data Science: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/datascience/',
          },
          {
            courseTitle: 'Data Science: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/data-science-tutorial/',
          },
          {
            courseTitle: 'Data Science: From Simple Learn',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/tutorials/data-science-tutorial/what-is-data-science',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'React.js',
        image: courseLogo.ReactJS,
        courses: [
          {
            courseTitle: 'React.js: From React',
            courseImage: CourseImage.React,
            level: 'Beginner',
            link: 'https://react.dev/blog/2023/03/16/introducing-react-dev',
          },
          {
            courseTitle: 'React.js: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
          },
          {
            courseTitle: 'React.js: From Simple Learn',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/tutorials/reactjs-tutorial',
          },
          {
            courseTitle: 'React.js: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/reactjs-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Node.js',
        image: courseLogo.NodeJS,
        courses: [
          {
            courseTitle: 'Node.js: From Node.js',
            courseImage: CourseImage.NodeJs,
            level: 'Beginner',
            link: 'https://nodejs.org/en/learn',
          },
          {
            courseTitle: 'Node.js: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/nodejs/',
          },
          {
            courseTitle: 'Node.js: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/nodejs/',
          },
          {
            courseTitle: 'Node.js: From Tutorials Teacher',
            courseImage: CourseImage.TutorialsTeacher,
            level: 'Intermediate',
            link: 'https://www.tutorialsteacher.com/nodejs',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Machine Learning',
        image: courseLogo.MachineLearning,
        courses: [
          {
            courseTitle: 'Machine Learning: From PluralSight',
            courseImage: CourseImage.Pluralsight,
            level: 'Beginner',
            link: 'https://www.pluralsight.com/courses/python-understanding-machine-learning?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-apac-in-dynamic&utm_content=free-trial&gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBk8qmhBs7kaVX8K-DmJyOZNfziuWW-9TMm9XKz1-IIbjrBwSFc_VYhoCoqcQAvD_BwE',
          },
          {
            courseTitle: 'Machine Learning: From Kaggle',
            courseImage: CourseImage.Kaggle,
            level: 'Beginner',
            link: 'https://www.kaggle.com/learn/intro-to-machine-learning',
          },
          {
            courseTitle: 'Machine Learning: From Google for Developers',
            courseImage: CourseImage.Google,
            level: 'Intermediate',
            link: 'https://developers.google.com/machine-learning/crash-course',
          },
          {
            courseTitle: 'Machine Learning: From Simple Learn',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/tutorials/machine-learning-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'IOS Development',
        image: courseLogo.IosDevelopment,
        courses: [
          {
            courseTitle: 'IOS Development: From Apple Developer',
            courseImage: CourseImage.Apple,
            level: 'Beginner',
            link: 'https://developer.apple.com/tutorials/app-dev-training/',
          },
          {
            courseTitle: 'IOS Development: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/getting-started-with-ios-development/',
          },
          {
            courseTitle: 'IOS Development: From IntelliPaat',
            courseImage: CourseImage.Intellipaat,
            level: 'Intermediate',
            link: 'https://intellipaat.com/blog/tutorial/ios-tutorial/',
          },
          {
            courseTitle: 'How to Become iOS Developer',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/skills-required-to-become-an-ios-developer-article',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Android Development',
        image: courseLogo.AndroidDevelopment,
        courses: [
          {
            courseTitle: 'Android Development: From Android Developer',
            courseImage: CourseImage.Android,
            level: 'Beginner',
            link: 'https://developer.android.com/courses?gclid=CjwKCAiA3aeqBhBzEiwAxFiOBo--IgCVOV5vVtdJ4OMYqGQ3jIO6TuiVsf8xZKmQz0i33mo_wiTbzRoC3EcQAvD_BwE&gclsrc=aw.ds',
          },
          {
            courseTitle: 'Android Development: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/android/index.htm',
          },
          {
            courseTitle: 'Android Development: From PluralSight',
            courseImage: CourseImage.Pluralsight,
            level: 'Intermediate',
            link: 'https://www.pluralsight.com/courses/android-start-developing?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-apac-in-dynamic&utm_content=free-trial&gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBtu_AEjyxMgNJkwATDNvis5mmQGul5DIDK1C9DAp7YKtJEhKTG6BvxoCm2oQAvD_BwE',
          },
          {
            courseTitle: 'Android Development: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/android-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Database Management',
        image: courseLogo.DataBaseManagement,
        courses: [
          {
            courseTitle: 'Database Management: From FreeCodeCamp',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/dbms-and-sql-basics/',
          },
          {
            courseTitle: 'Database Management: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/dbms/index.htm',
          },
          {
            courseTitle: 'Database Management: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/dbms/',
          },
          {
            courseTitle: 'Database Management: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/dbms-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Next.Js',
        image: courseLogo.NextJs,
        courses: [
          {
            courseTitle: 'Next.Js: From FreeCodeCamp',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/nextjs-tutorial/',
          },
          {
            courseTitle: 'Next.Js: From Next.Js',
            courseImage: CourseImage.NextJs,
            level: 'Beginner',
            link: 'https://nextjs.org/learn-pages-router/basics/create-nextjs-app',
          },
          {
            courseTitle: 'Next.Js: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/nextjs/index.htm',
          },
          {
            courseTitle: 'Next.Js: From WeLearnCode',
            courseImage: CourseImage.WeLearnCode,
            level: 'Intermediate',
            link: 'https://welearncode.com/beginners-guide-nextjs/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Flutter',
        image: courseLogo.Flutter,
        courses: [
          {
            courseTitle: 'Flutter: From PluralSight',
            courseImage: CourseImage.Pluralsight,
            level: 'Beginner',
            link: 'https://www.pluralsight.com/courses/flutter-getting-started?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-apac-in-dynamic&utm_content=free-trial&gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBgTGICHuhV9Np-ecYJ0OGup6Eft37P0lVwIO2SDKBoYzCwzFWtbC0hoCP2gQAvD_BwE',
          },
          {
            courseTitle: 'Flutter: From Flutter',
            courseImage: CourseImage.Flutter,
            level: 'Beginner',
            link: 'https://docs.flutter.dev/get-started/install',
          },
          {
            courseTitle: 'Flutter: From FreeCodeCamp',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Intermediate',
            link: 'https://www.freecodecamp.org/news/learn-flutter-full-course/',
          },
          {
            courseTitle: 'Flutter: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/flutter-tutorial/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'React Native',
        image: courseLogo.ReactNative,
        courses: [
          {
            courseTitle: 'React Native: From PluralSight',
            courseImage: CourseImage.Pluralsight,
            level: 'Beginner',
            link: 'https://www.pluralsight.com/courses/flutter-getting-started?utm_source=google&utm_medium=paid-search&utm_campaign=upskilling-and-reskilling&utm_term=ssi-apac-in-dynamic&utm_content=free-trial&gad_source=1&gclid=CjwKCAiA3aeqBhBzEiwAxFiOBgTGICHuhV9Np-ecYJ0OGup6Eft37P0lVwIO2SDKBoYzCwzFWtbC0hoCP2gQAvD_BwE',
          },
          {
            courseTitle: 'React Native: From React Native',
            courseImage: CourseImage.ReactNative,
            level: 'Beginner',
            link: 'https://reactnative.dev/docs/tutorial',
          },
          {
            courseTitle: 'React Native: From FreeCodeCamp',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Intermediate',
            link: 'https://www.freecodecamp.org/news/tag/react-native/',
          },
          {
            courseTitle: 'React Native: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/react_native/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Java',
        image: courseLogo.Java,
        courses: [
          {
            courseTitle: 'Java: From LearnJavaOnline',
            courseImage: CourseImage.Java,
            level: 'Beginner',
            link: 'https://www.learnjavaonline.org/',
          },
          {
            courseTitle: 'Java: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/java/',
          },
          {
            courseTitle: 'Java: From Programiz',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/java-programming',
          },
          {
            courseTitle: 'Java: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/java/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'C',
        image: courseLogo.C,
        courses: [
          {
            courseTitle: 'C: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/c-programming-language/',
          },
          {
            courseTitle: 'C: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/c/c_intro.php',
          },
          {
            courseTitle: 'C: From Programiz',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/c-programming',
          },
          {
            courseTitle: 'C: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/c-programming-language-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'C++',
        image: courseLogo.CPP,
        courses: [
          {
            courseTitle: 'C++: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/c-plus-plus/',
          },
          {
            courseTitle: 'C++: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/cpp/',
          },
          {
            courseTitle: 'C++: From Programiz',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/cpp-programming',
          },
          {
            courseTitle: 'C++: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/cpp-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'C#',
        image: courseLogo.CSharp,
        courses: [
          {
            courseTitle: 'C#: From Tutorials Teacher',
            courseImage: CourseImage.TutorialsTeacher,
            level: 'Beginner',
            link: 'https://www.tutorialsteacher.com/csharp',
          },
          {
            courseTitle: 'C#: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/cs/index.php',
          },
          {
            courseTitle: 'C#: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/csharp/index.htm',
          },
          {
            courseTitle: 'C#: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/c-sharp-tutorial',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'HTML',
        image: courseLogo.Html,
        courses: [
          {
            courseTitle: 'HTML: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/html/',
          },
          {
            courseTitle: 'HTML: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/html/',
          },
          {
            courseTitle: 'HTML: From Programiz',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/html',
          },
          {
            courseTitle: 'HTML: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/html/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'CSS',
        image: courseLogo.CSS,
        courses: [
          {
            courseTitle: 'CSS: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/css/',
          },
          {
            courseTitle: 'CSS: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/css/',
          },
          {
            courseTitle: 'CSS: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/css-tutorial',
          },
          {
            courseTitle: 'CSS: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/css/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Ruby',
        image: courseLogo.Ruby,
        courses: [
          {
            courseTitle: 'Ruby: From Launch School',
            courseImage: CourseImage.LauchSchool,
            level: 'Beginner',
            link: 'https://launchschool.com/books/ruby',
          },
          {
            courseTitle: 'Ruby: From Code Conquest',
            courseImage: CourseImage.CodeConquest,
            level: 'Beginner',
            link: 'https://www.codeconquest.com/tutorials/ruby/',
          },
          {
            courseTitle: 'Ruby: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/ruby-tutorial',
          },
          {
            courseTitle: 'Ruby: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/ruby/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Swift',
        image: courseLogo.Swift,
        courses: [
          {
            courseTitle: 'Swift: From Hacking With Swift',
            courseImage: CourseImage.HackingWithSwift,
            level: 'Beginner',
            link: 'https://www.hackingwithswift.com/learn',
          },
          {
            courseTitle: 'Swift: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.in/swift/tutorials/',
          },
          {
            courseTitle: 'Swift: From Code Conquest',
            courseImage: CourseImage.CodeConquest,
            level: 'Intermediate',
            link: 'https://www.codeconquest.com/tutorials/swift/',
          },
          {
            courseTitle: 'Swift: From Programiz',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/swift-programming',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Go',
        image: courseLogo.Go,
        courses: [
          {
            courseTitle: 'Go:From Go',
            courseImage: CourseImage.Go,
            level: 'Beginner',
            link: 'https://go.dev/doc/tutorial/getting-started',
          },
          {
            courseTitle: 'Go:From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/go/',
          },
          {
            courseTitle: 'Go:From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Intermediate',
            link: 'https://www.geeksforgeeks.org/golang-tutorial-learn-go-programming-language/',
          },
          {
            courseTitle: 'Go:From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/go/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'PHP',
        image: courseLogo.PHP,
        courses: [
          {
            courseTitle: 'PHP: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/php-tutorial/',
          },
          {
            courseTitle: 'PHP: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/php/',
          },
          {
            courseTitle: 'PHP: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/php-tutorial',
          },
          {
            courseTitle: 'PHP: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/php/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Kotlin',
        image: courseLogo.Kotlin,
        courses: [
          {
            courseTitle: 'Kotlin: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/kotlin-programming-language/',
          },
          {
            courseTitle: 'Kotlin: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/KOTLIN/index.php',
          },
          {
            courseTitle: 'Kotlin: From Programiz',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/kotlin-programming',
          },
          {
            courseTitle: 'Kotlin: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/kotlin/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Firebase',
        image: courseLogo.Firebase,
        courses: [
          {
            courseTitle: 'Learn Firebase fundamentals',
            courseImage: CourseImage.FireBase,
            level: 'Beginner',
            link: 'https://firebase.google.com/docs/guides',
          },
          {
            courseTitle: 'Firebase: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Beginner',
            link: 'https://www.javatpoint.com/firebase',
          },
          {
            courseTitle: 'Flutter - Firebase - CRUD - Build 2 Apps super easy!',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/flutter-firebase-crud-build-2-apps-super-easy/',
          },
          {
            courseTitle: 'Firebase: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/firebase/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'SQL',
        image: courseLogo.Sql,
        courses: [
          {
            courseTitle: 'SQL: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/sql-tutorial/',
          },
          {
            courseTitle: 'SQL: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/sql/',
          },
          {
            courseTitle: 'Learn SQL: SQL Tutorial for Beginners',
            courseImage: CourseImage.Programiz,
            level: 'Intermediate',
            link: 'https://www.programiz.com/sql',
          },
          {
            courseTitle: 'Advanced Databases and SQL Querying',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/advanced-tsql-querying-using-sql-2014/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'MongoDB',
        image: courseLogo.MongoDb,
        courses: [
          {
            courseTitle: 'MongoDB: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/mongodb-tutorial/',
          },
          {
            courseTitle: 'MongoDB: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/mongodb/',
          },
          {
            courseTitle: 'Learn MongoDB and Advance Your Career',
            courseImage: CourseImage.MongoDb,
            level: 'Intermediate',
            link: 'https://learn.mongodb.com/',
          },
          {
            courseTitle: 'MongoDB: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/mongodb/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Django',
        image: courseLogo.DJango,
        courses: [
          {
            courseTitle: 'Django: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/django-tutorial/',
          },
          {
            courseTitle: 'Django: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/django/',
          },
          {
            courseTitle: 'Django Web Framework (Python)',
            courseImage: CourseImage.MDN,
            level: 'Intermediate',
            link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django',
          },
          {
            courseTitle: 'Django: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/django/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'GitHub',
        image: courseLogo.GitHub,
        courses: [
          {
            courseTitle:
              'How to Use Git and GitHub – Introduction for Beginners',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/introduction-to-git-and-github/',
          },
          {
            courseTitle: 'GitHub: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/git/',
          },
          {
            courseTitle: 'Hello World - GitHub Docs',
            courseImage: CourseImage.Github,
            level: 'Intermediate',
            link: 'https://docs.github.com/en/get-started/quickstart/hello-world',
          },
          {
            courseTitle: 'Introduction to Git and GitHub',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/introduction-git-github',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Redux',
        image: courseLogo.Redux,
        courses: [
          {
            courseTitle: 'Getting Started with Redux',
            courseImage: CourseImage.Redux,
            level: 'Beginner',
            link: 'https://redux.js.org/introduction/getting-started',
          },
          {
            courseTitle:
              'Redux for Beginners – Learn Redux Basics with Code Examples',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/redux-for-beginners/',
          },
          {
            courseTitle: 'React With Redux Tutorial: Learn the Basics',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/tutorials/reactjs-tutorial/react-with-redux',
          },
          {
            courseTitle: 'Redux: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/redux/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Flask',
        image: courseLogo.Flask,
        courses: [
          {
            courseTitle:
              'Everything you need to know about Flask for beginners',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/blog/everything-you-need-to-know-about-flask-for-beginners/',
          },
          {
            courseTitle: 'Flask: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/flask-tutorial/',
          },
          {
            courseTitle: 'Flask: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Intermediate',
            link: 'https://www.javatpoint.com/flask-tutorial',
          },
          {
            courseTitle: 'Flask: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/flask/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'MySQL',
        image: courseLogo.MySql,
        courses: [
          {
            courseTitle: 'MySQL: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/MySQL/default.asp',
          },
          {
            courseTitle: 'MySQL: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Beginner',
            link: 'https://www.javatpoint.com/mysql-tutorial',
          },
          {
            courseTitle: 'Learn to Use the MySQL Database',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Intermediate',
            link: 'https://www.freecodecamp.org/news/learn-to-use-the-mysql-database/',
          },
          {
            courseTitle: 'MySQL: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/mysql/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'PostgreSQL',
        image: courseLogo.PostgreSQL,
        courses: [
          {
            courseTitle: 'PostgreSQL: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/postgresql/index.php',
          },
          {
            courseTitle: 'PostgreSQL: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Beginner',
            link: 'https://www.javatpoint.com/postgresql-tutorial',
          },
          {
            courseTitle:
              'Learn Programming in Go (golang): Webserver with PostgreSQL',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/learn-programming-in-go-golang-webserver-with-postgresql/',
          },
          {
            courseTitle: 'PostgreSQL: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/postgresql/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Oracle',
        image: courseLogo.Oracle,
        courses: [
          {
            courseTitle: 'Oracle Database Foundations',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/introduction-to-oracle-sql-55078',
          },
          {
            courseTitle: 'Oracle SQL',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/oracle-sql',
          },
          {
            courseTitle: 'Oracle Cloud Infrastructure Architect Associate',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/oracle-cloud-infrastructure-architect-associate',
          },
          {
            courseTitle: 'Oracle ERP - Fundamental Concepts & Principles',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/oracle-erp-fundamental-concepts-and-principles',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Amazon Web Services',
        image: courseLogo.AWS,
        courses: [
          {
            courseTitle: 'AWS Fundamentals Specialization',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/specializations/aws-fundamentals?',
          },
          {
            courseTitle: 'AWS Cloud Practitioner Tutorial',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/aws/',
          },
          {
            courseTitle: 'AWS Tutorial: A Step-by-Step Tutorial for Beginners',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/tutorials/aws-tutorial',
          },
          {
            courseTitle: 'Amazon Web Services: Basic',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/amazon-web-services-basic',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Microsoft Azure',
        image: courseLogo.MicrosoftAsure,
        courses: [
          {
            courseTitle: 'Microsoft Azure Essentials',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/microsoft-azure-essentials',
          },
          {
            courseTitle: 'Microsoft Azure: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Beginner',
            link: 'https://www.tutorialspoint.com/microsoft_azure/index.htm',
          },
          {
            courseTitle: 'Azure Fundamentals',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/learn-azure-basics-free-course-skillup?tag=microsoft%20azure',
          },
          {
            courseTitle: 'Microsoft Azure Databricks for Data Engineering',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/azure-databricks-maruti/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Google Cloud Platform',
        image: courseLogo.GoogleCloud,
        courses: [
          {
            courseTitle: 'Google Cloud Platform for Beginners',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/google-cloud-platform-for-beginners1',
          },
          {
            courseTitle:
              'Google Cloud Platform Tutorial: From Zero to Hero with GCP',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/google-cloud-platform-from-zero-to-hero/',
          },
          {
            courseTitle: 'Google Cloud Fundamentals: Core Infrastructure',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/gcp-fundamentals',
          },
          {
            courseTitle: 'Grow Skills with Google Cloud Training',
            courseImage: CourseImage.GoogleCloud,
            level: 'Advanced',
            link: 'https://www.udemy.com/course/advanced-tsql-querying-using-sql-2014/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Docker',
        image: courseLogo.Docker,
        courses: [
          {
            courseTitle: 'Docker Best Practices',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/docker-best-practices',
          },
          {
            courseTitle: 'Getting Started with Docker',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/learn-docker-basics-free-course-skillup',
          },
          {
            courseTitle: 'HANDS ON DOCKER for JAVA Developers',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/introduction-to-docker-for-java-developers/',
          },
          {
            courseTitle: 'DevOps with Docker',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/helsinki-devops-with-docker-98598',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Kubernetes',
        image: courseLogo.Kubernetes,
        courses: [
          {
            courseTitle: 'Kubernetes: Getting Started',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/kubernetes-getting-started/',
          },
          {
            courseTitle: 'Introduction to Kubernetes',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/learn-kubernetes-basics-free-course-skillup',
          },
          {
            courseTitle: 'Introduction to Kubernetes',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-kubernetes1',
          },
          {
            courseTitle:
              'Deploying Microservices to Kubernetes using Azure DevOps',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/deploying-microservices-to-kubernetes-using-azure-190615',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Bootstrap',
        image: courseLogo.BootStrap,
        courses: [
          {
            courseTitle: 'Bootstrap: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Beginner',
            link: 'https://www.javatpoint.com/bootstrap-tutorial',
          },
          {
            courseTitle: 'Bootstrap 4 Tutorial',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/bootstrap4/',
          },
          {
            courseTitle:
              'Learn Bootstrap 4 in 30 minutes by building a landing page website',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Intermediate',
            link: 'https://www.freecodecamp.org/news/learn-bootstrap-4-in-30-minute-by-building-a-landing-page-website-guide-for-beginners-f64e03833f33/',
          },
          {
            courseTitle: 'Complete Bootstrap 4 course - build 3 projects',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/bootstrap-4-tutorials/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Sass',
        image: courseLogo.Saas,
        courses: [
          {
            courseTitle: 'Sass: From JavaTPoint',
            courseImage: CourseImage.JavaTPoint,
            level: 'Beginner',
            link: 'https://www.javatpoint.com/sass-tutorial',
          },
          {
            courseTitle: 'Sass: From W3Schools',
            courseImage: CourseImage.W3Schools,
            level: 'Beginner',
            link: 'https://www.w3schools.com/sass/',
          },
          {
            courseTitle: "The Beginner's Guide to Sass",
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/the-beginners-guide-to-sass/',
          },
          {
            courseTitle: 'Sass Workflow',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/sass-workflow/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Webpack',
        image: courseLogo.WebPack,
        courses: [
          {
            courseTitle: 'A Beginner’s Guide to Webpack',
            courseImage: CourseImage.SitePoint,
            level: 'Beginner',
            link: 'https://www.sitepoint.com/webpack-beginner-guide/',
          },
          {
            courseTitle: 'An intro to Webpack: what it is and how to use it',
            courseImage: CourseImage.FreeCodeCamp,
            level: 'Beginner',
            link: 'https://www.freecodecamp.org/news/an-intro-to-webpack-what-it-is-and-how-to-use-it-8304ecdc3c60/',
          },
          {
            courseTitle: 'Learn Webpack - Full Tutorial for Beginners',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/classroom/freecodecamp-learn-webpack-full-tutorial-for-beginners-105040',
          },
          {
            courseTitle: 'Free Webpack Tutorial - Webpack 4: Beyond the Basics',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/free-webpack-tutorial-webpack-4-beyond-the-basics',
          },
        ],
        noofcourses: 4,
      },
    ],
  },

  {
    id: 2,
    mainTitle: 'Business',
    mainImage: courseLogo.Business,
    mainCourses: [
      {
        title: 'Entrepreneurship',
        image: BussinessLogo.EntrePreneurship,
        courses: [
          {
            courseTitle: 'Entrepreneurship: Creating the Business',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/tag/entrepreneurship',
          },
          {
            courseTitle: 'Entrepreneurship 101',
            courseImage: CourseImage.GCFGlobal,
            level: 'Beginner',
            link: 'https://edu.gcfglobal.org/en/entrepreneurship-101/#',
          },
          {
            courseTitle: 'Creativity for Business Success',
            courseImage: CourseImage.ShopifyLearn,
            level: 'Intermediate',
            link: 'https://www.shopify.com/learn/course/creativity-for-business-success?selectedTopic=entrepreneurship',
          },
          {
            courseTitle: 'Entrepreneurship Specialization',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/specializations/wharton-entrepreneurship',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Marketing',
        image: BussinessLogo.Marketing,
        courses: [
          {
            courseTitle: 'Digital Marketing Basics Course',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/free-digital-marketing-basics-course/',
          },
          {
            courseTitle: 'Digital Marketing Tutorial for Beginners',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/tutorials/digital-marketing-tutorial',
          },
          {
            courseTitle: 'How to Create an Effective Marketing Strategy',
            courseImage: CourseImage.Semrush,
            level: 'Intermediate',
            link: 'https://www.semrush.com/academy/courses/create-effective-marketing-strategy/',
          },
          {
            courseTitle: 'Digital Marketing',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/digital_marketing/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Finance',
        image: BussinessLogo.Finance,
        courses: [
          {
            courseTitle: 'Personal Finance',
            courseImage: CourseImage.GCFGlobal,
            level: 'Beginner',
            link: 'https://edu.gcfglobal.org/en/topics/personal-finance/#',
          },
          {
            courseTitle: 'Personal Finance 101: Everything You Need to Know',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/personal-finance-101/',
          },
          {
            courseTitle: 'Introduction to Corporate Finance',
            courseImage: CourseImage.GreatLearning,
            level: 'Intermediate',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-corporate-finance',
          },
          {
            courseTitle: 'Introduction to Finance: The Basics',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/introduction-to-finance-the-basics',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Management',
        image: BussinessLogo.Management,
        courses: [
          {
            courseTitle: 'Business, Management & Leadership Fundamentals',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/free-course-business-management-leadership-fundamentals/',
          },
          {
            courseTitle: 'Introduction to Cattery Management',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/introduction-to-cattery-management?show_modal=true',
          },
          {
            courseTitle: 'Principles of Management',
            courseImage: CourseImage.GreatLearning,
            level: 'Intermediate',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/principles-of-management',
          },
          {
            courseTitle: 'Mastering Crowd Management',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/mastering-crowd-management?show_modal=true',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Economics',
        image: BussinessLogo.Economic,
        courses: [
          {
            courseTitle: 'Economics is for Everyone',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/economics-is-for-everyone/',
          },
          {
            courseTitle: 'Macroeconomics',
            courseImage: CourseImage.KhanAcadamy,
            level: 'Beginner',
            link: 'https://edu.gcfglobal.org/en/entrepreneurship-101/#',
          },
          {
            courseTitle: 'Inflation in Modern Economies',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/inflation-in-modern-economies-revised',
          },
          {
            courseTitle: 'Measuring Economic Inequality in Today’s World',
            courseImage: CourseImage.FutureLearn,
            level: 'Intermediate',
            link: 'https://www.futurelearn.com/courses/doing-economics-measuring-inequality',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Sales Skills',
        image: BussinessLogo.SalesSkills,
        courses: [
          {
            courseTitle: 'How to sell anything in 3 simple steps',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/sellanythingin3steps/',
          },
          {
            courseTitle: 'Sales Management',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/sales-management',
          },
          {
            courseTitle: 'Customer Care Skills and Telephone Etiquette',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/customer-care-skills-with-telephone-etiquette',
          },
          {
            courseTitle:
              'Basic sales concepts - techniques to develop your business',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/basic-sales-concepts-techniques-to-develop-your-business',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Leadership',
        image: BussinessLogo.Leadership,
        courses: [
          {
            courseTitle: 'Joyful Leadership',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/joyful-leader/',
          },
          {
            courseTitle: 'Leadership and Management',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/leadership-and-management',
          },
          {
            courseTitle: 'Diploma in Leadership & Management',
            courseImage: CourseImage.Xford,
            level: 'Intermediate',
            link: 'https://www.oxfordhomestudy.com/courses/leadership-courses-online/leadership-and-management-course',
          },
          {
            courseTitle: 'Leadership & Management Skills For Business',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/leadership-and-management-skills-for-business-managing-employees',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Project Management',
        image: BussinessLogo.ProjectManagement,
        courses: [
          {
            courseTitle: 'Project Management Tutorial for Beginners',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/tutorials/project-management-tutorial',
          },
          {
            courseTitle: 'Project Management Tutorial: A Complete Guide',
            courseImage: CourseImage.Guru99,
            level: 'Beginner',
            link: 'https://www.guru99.com/project-management-tutorial.html',
          },
          {
            courseTitle: 'Introduction to Project Management',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/project-management-101-pm101/',
          },
          {
            courseTitle: 'Agile Project Management',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/agile-project-management',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Business Ethics',
        image: BussinessLogo.BussinessEthics,
        courses: [
          {
            courseTitle: 'Investopedia',
            courseImage: CourseImage.Investopedia,
            level: 'Beginner',
            link: 'https://alison.com/tag/entrepreneurship',
          },
          {
            courseTitle: 'Business Ethics: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/business-ethics-meaning-benefits-and-elements/',
          },
          {
            courseTitle: 'Ethical Intelligence in Business',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/ethical-intelligence-in-business',
          },
          {
            courseTitle: 'Bussiness Ethics: From Tutorials Point',
            courseImage: CourseImage.TutorialTPoint,
            level: 'Intermediate',
            link: 'https://www.tutorialspoint.com/business_ethics/index.htm',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'HR Management',
        image: BussinessLogo.HR,
        courses: [
          {
            courseTitle: 'HR Management: From GeeksForGeeks',
            courseImage: CourseImage.GeeksForGeeks,
            level: 'Beginner',
            link: 'https://www.geeksforgeeks.org/human-resource-management-hrm/',
          },
          {
            courseTitle: 'Human Resource Management',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/human-resource-management',
          },
          {
            courseTitle: 'Crash Course in HRM',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/crash-cours',
          },
          {
            courseTitle: 'Fundamentals of Human Resources',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/fundamentals-of-human-resources',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Communication',
        image: BussinessLogo.Communication,
        courses: [
          {
            courseTitle:
              'How to speak to anyone & be fearless - in less than 55 min',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/fearless-public-speaker-bootcamp-by-ricky-mendoza/',
          },
          {
            courseTitle: 'Effective communication',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/effective-communication',
          },
          {
            courseTitle: 'Business English Communication Skills Specialization',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/specializations/business-english?action=enroll&aid=true#courses',
          },
          {
            courseTitle: 'How to Stay Productive at Work',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/how-to-stay-productive-at-work',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Time Management',
        image: BussinessLogo.TimeManagement,
        courses: [
          {
            courseTitle:
              'Top 16 Time Management Skills to Help You Become a Success',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/time-management-skills-article',
          },
          {
            courseTitle: '10 tips for mastering time management at work',
            courseImage: CourseImage.LucideChart,
            level: 'Beginner',
            link: 'https://www.lucidchart.com/blog/time-management-at-work',
          },
          {
            courseTitle: '6 Strategies to Better Manage Your Time',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/articles/time-management',
          },
          {
            courseTitle: 'A Mini Course on Time Management',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/manageyourtime/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Negotiation',
        image: BussinessLogo.Negotiation,
        courses: [
          {
            courseTitle:
              'Negotiation : How to Actualise your negotiation potential!',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/negotiation-how-to-actualise-your-negotiation-potential',
          },
          {
            courseTitle: 'Conflict Resolution in the Workplace',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/conflict-resolution-in-the-workplace',
          },
          {
            courseTitle:
              'Successful Negotiation: Essential Strategies and Skills',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/negotiation-skills',
          },
          {
            courseTitle: 'Basic Negotiation Skills and Steps',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/basic-negotiation-skills-and-steps/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Networking',
        image: BussinessLogo.NetWorking,
        courses: [
          {
            courseTitle: 'Networking: What It Is and How to Do It Successfully',
            courseImage: CourseImage.Investopedia,
            level: 'Beginner',
            link: 'https://www.investopedia.com/terms/n/networking.asp',
          },
          {
            courseTitle: 'Introduction to networking for complete beginners',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/introduction-to-networking-for-complete-beginners/',
          },
          {
            courseTitle: 'Networking Tutorial',
            courseImage: CourseImage.SimpleLearn,
            level: 'Intermediate',
            link: 'https://www.simplilearn.com/tutorials/networking-tutorial',
          },
          {
            courseTitle:
              'Personal / Business Networking Skills For Maximum Success!',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/personal-business-networking-skills-for-maximum-success',
          },
        ],
        noofcourses: 4,
      },
    ],
  },

  {
    id: 3,
    mainTitle: 'Health & Wellness',
    mainImage: courseLogo.Health,
    mainCourses: [
      {
        title: 'Yoga',
        image: HealthLogo.Yoga,
        courses: [
          {
            courseTitle: 'All about Yoga:Poses, Types, Benifits and More',
            courseImage: CourseImage.EverydayHealth,
            level: 'Beginner',
            link: 'https://www.everydayhealth.com/yoga/',
          },
          {
            courseTitle: 'YOGA FOR BEGINNERS',
            courseImage: CourseImage.YogaBasics,
            level: 'Beginner',
            link: 'https://www.yogabasics.com/practice/yoga-for-beginners/',
          },
          {
            courseTitle: 'Yoga for Everyone',
            courseImage: CourseImage.TheNewYorkTimes,
            level: 'Intermediate',
            link: 'https://www.nytimes.com/article/beginner-yoga.html',
          },
          {
            courseTitle: 'Yoga Foundations and Teaching',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/yoga-foundations-and-teaching',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Nutrition',
        image: HealthLogo.Nutrition,
        courses: [
          {
            courseTitle: 'Science of Nutrition',
            courseImage: CourseImage.Study,
            level: 'Beginner',
            link: 'https://study.com/academy/course/science-of-nutrition-course.html',
          },
          {
            courseTitle: 'Basics of Nutrition',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/basics-of-nutrition/',
          },
          {
            courseTitle:
              'Nutrition and Health: Micronutrients and Malnutrition',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/nutrition-wageningen-university-research-nutritio-3643',
          },
          {
            courseTitle: 'Introduction to Human Nutrition',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/introduction-to-human-nutrition-revised',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Fitness Training',
        image: HealthLogo.FitnessTraining,
        courses: [
          {
            courseTitle: 'Fitness training: Elements of a well-rounded routine',
            courseImage: CourseImage.MayoClinic,
            level: 'Beginner',
            link: 'https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/fitness-training/art-20044792',
          },
          {
            courseTitle: 'Fitness Practitioner',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/fitness-practitioner-by-drzsu/?utm_source=adwords&utm_medium=udemyads&utm_campaign=DSA_Catchall_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_82569850245_._ad_533220805577_._kw__._de_c_._dm__._pl__._ti_dsa-39942708883_._li_9184388_._pd__._&matchtype=&gad_source=1&gclid=Cj0KCQiAgK2qBhCHARIsAGACuzksQrg2w9o8cUu-fNmrEy2AmUGanjpFsX_DEzMz59wHmGW_Gj2oGMkaAuDUEALw_wcB',
          },
          {
            courseTitle: 'Exercise and fitness knowledge',
            courseImage: CourseImage.AMac,
            level: 'Intermediate',
            link: 'https://amactraining.co.uk/resources/free-learning-material/level-2-exercise-and-fitness-knowledge-index/',
          },
          {
            courseTitle: 'Fitness Coaching Gym Workouts and Bodybuilding',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/fitness-coaching-gym-workouts-and-bodybuilding',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Mental Health',
        image: HealthLogo.MentalHealth,
        courses: [
          {
            courseTitle: 'Managing Mental Health and Stress',
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/courses/managing-mental-health-and-stress',
          },
          {
            courseTitle: 'Mental Health: Learn Mindfulness',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/mental-health-learn-mindfulness',
          },
          {
            courseTitle: "Children & Young People's Mental Health",
            courseImage: CourseImage.MentalHealthCourse,
            level: 'Intermediate',
            link: 'https://mentalhealthcourses.org.uk/children-and-young-peoples-mental-health/',
          },
          {
            courseTitle: 'Diploma in Mental Health',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/diploma-in-mental-health',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Diet & Weight Loss',
        image: HealthLogo.DietWeight,
        courses: [
          {
            courseTitle: 'Networking: What It Is and How to Do It Successfully',
            courseImage: CourseImage.Investopedia,
            level: 'Beginner',
            link: 'https://www.investopedia.com/terms/n/networking.asp',
          },
          {
            courseTitle:
              "Weight Loss Fundamentals - Don't waste time with Fad Diets!",
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/onebetterfatloss/',
          },
          {
            courseTitle: 'FREE Professional Weight Loss Course',
            courseImage: CourseImage.HealthScienceAcadamy,
            level: 'Intermediate',
            link: 'https://thehealthsciencesacademy.org/registration-professional-weight-loss-course/',
          },
          {
            courseTitle: 'Coaching Weight Loss',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/coaching-weight-loss',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Wellness Coaching',
        image: HealthLogo.WellnessCoaching,
        courses: [
          {
            courseTitle:
              'Wellness Coaching: Powerful Skills for Everyday People',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/canvas-network-wellness-coaching-powerful-skills-for-everyday-people-5170',
          },
          {
            courseTitle: 'Music For Wellness',
            courseImage: CourseImage.EdX,
            level: 'Beginner',
            link: 'https://www.edx.org/learn/well-being/berklee-college-of-music-music-for-wellness?webview=false&campaign=Music+For+Wellness&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fhealth-wellness',
          },
          {
            courseTitle:
              'Nutritional Health Coaching in an Integrative Setting',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/nutritional-health-coaching-in-an-integrative-setting',
          },
          {
            courseTitle: 'Coaching Health and Wellness',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/coaching-health-and-wellness',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Healthy Lifestyle',
        image: HealthLogo.HealthyLifeCycle,
        courses: [
          {
            courseTitle: 'The Ultimate Guide To A Healthy Lifestyle',
            courseImage: CourseImage.Orthoindy,
            level: 'Beginner',
            link: 'https://www.orthoindy.com/guides/healthy-lifestyle',
          },
          {
            courseTitle: '8 tips for healthy eating',
            courseImage: CourseImage.NHS,
            level: 'Beginner',
            link: 'https://www.nhs.uk/live-well/eat-well/how-to-eat-a-balanced-diet/eight-tips-for-healthy-eating/',
          },
          {
            courseTitle: 'The Definitive Guide to Healthy Eating in Real Life',
            courseImage: CourseImage.HealthLine,
            level: 'Intermediate',
            link: 'https://www.healthline.com/nutrition/how-to-eat-healthy-guide',
          },
          {
            courseTitle: ' Health Is Wealth Essay for Students and Children',
            courseImage: CourseImage.Topper,
            level: 'Intermediate',
            link: 'https://www.toppr.com/guides/essays/health-is-wealth-essay/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Alternative Medicine',
        image: HealthLogo.AlternativeMedicition,
        courses: [
          {
            courseTitle: 'Lifestyle Medicine Treatments of Chronic Disease',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/lifestyle-medicine-treatments-of-chronic-disease',
          },
          {
            courseTitle:
              'Family Health - GP, Health Visitor, Nurse & Pharmacist CPD',
            courseImage: CourseImage.ReedCourses,
            level: 'Beginner',
            link: 'https://www.reed.co.uk/courses/family-health--gp-health-visitor-nurse-pharmacist-cpd/458838#/courses/free/alternative-medicine',
          },
          {
            courseTitle: 'Herbal Medicine',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/herbalmedicine-12872',
          },
          {
            courseTitle: 'Basics of Herbal Medicine',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/fundamentals-of-herbal-medicine',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Stress Management',
        image: HealthLogo.StressManagement,
        courses: [
          {
            courseTitle: 'Stress Management - Understanding Stress',
            courseImage: CourseImage.TotalSuccessTraning,
            level: 'Beginner',
            link: 'https://www.proprofs.com/training/course/?title=free-stress-management-understanding',
          },
          {
            courseTitle:
              'Stress Management : Practical Steps Ways to Deal with Stress',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/stress-management-practical-steps-ways-to-deal-with-stress/',
          },
          {
            courseTitle: 'Relieve your stress with 10 techniques',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/relieve-your-stress-with-10-techniques',
          },
          {
            courseTitle:
              'Stress Management - Techniques for Coping with Stress',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/stress-management-techniques-for-coping-with-stress-revised',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'First Aid',
        image: HealthLogo.FirstAid,
        courses: [
          {
            courseTitle: 'Basic online first aid course',
            courseImage: CourseImage.FirstAid,
            level: 'Beginner',
            link: 'https://www.firstaidforfree.com/free-first-aid-course/',
          },
          {
            courseTitle: 'Learn CPR, AED and First Aid with 7 Steps!',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/cpr-aed-and-first-aid-course/',
          },
          {
            courseTitle: 'Herbalism : First Aid Remedies',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/herbalism-first-aid-remedies-certificate',
          },
          {
            courseTitle: 'First Aid for Mental Health',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/first-aid-for-mental-health',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Meditation',
        image: HealthLogo.Meditation,
        courses: [
          {
            courseTitle: 'Learn How to Meditate: A MindFull Guide',
            courseImage: CourseImage.MindFull,
            level: 'Beginner',
            link: 'https://www.mindful.org/how-to-meditate/',
          },
          {
            courseTitle: 'Meditation for beginners',
            courseImage: CourseImage.HeadSpace,
            level: 'Beginner',
            link: 'https://www.headspace.com/meditation/meditation-for-beginners',
          },
          {
            courseTitle: 'Learn Meditation - Theory & Practice',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/learn-meditation-theory-practice/',
          },
          {
            courseTitle: 'Meditation',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/meditation',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Sleep Hygiene',
        image: HealthLogo.SleepHygiene,
        courses: [
          {
            courseTitle: 'Sleep hygiene tips',
            courseImage: CourseImage.HeadSpace,
            level: 'Beginner',
            link: 'https://www.headspace.com/sleep/sleep-hygiene',
          },
          {
            courseTitle: 'Mastering Sleep Hygiene: Your Path to Quality Sleep',
            courseImage: CourseImage.SleepFoundataion,
            level: 'Beginner',
            link: 'https://www.sleepfoundation.org/sleep-hygiene',
          },
          {
            courseTitle: 'Master Your Sleep Hygiene: An In-Depth Guide',
            courseImage: CourseImage.Blissy,
            level: 'Intermediate',
            link: 'https://blissy.com/blogs/the-blissy-blog/master-your-sleep-hygiene-an-in-depth-guide-and-free-pdf-checklist',
          },
          {
            courseTitle: 'How to Sleep Better',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/how-to-sleep-better',
          },
        ],
        noofcourses: 4,
      },
    ],
  },
  {
    id: 4,
    mainTitle: 'Psychology and Mental Health',
    mainImage: courseLogo.Psychology,
    mainCourses: [
      {
        title: 'Psychology Fundamentals',
        image: PsychologyLogo.PsycholgoyFundamentals,
        courses: [
          {
            courseTitle: 'Introduction To Psychology',
            courseImage: CourseImage.PsychologyOrg,
            level: 'Beginner',
            link: 'https://ocw.mit.edu/courses/9-00sc-introduction-to-psychology-fall-2011/',
          },
          {
            courseTitle: 'Learn Social Psychology Fundamentals',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/learn-social-psychology-fundamentals/',
          },
          {
            courseTitle: 'Fundamentals of Psychology',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/psychology-doane-university-fundamentals-of-psych-21557',
          },
          {
            courseTitle:
              'Psychology Tutorial - Happiness Psychology: 5 Proven Tips',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/free-psychology-tutorial-happiness-psychology-5-proven-tips',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Counseling Techniques',
        image: PsychologyLogo.CounsellingTechnique,
        courses: [
          {
            courseTitle: 'Effective Counselling Skills',
            courseImage: CourseImage.CounselingTutor,
            level: 'Beginner',
            link: 'https://counsellingtutor.com/basic-counselling-skills/',
          },
          {
            courseTitle: 'Do You Need Counseling?',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/do-you-need-counseling/',
          },
          {
            courseTitle:
              'PTSD & Trauma Counseling with Combination of Psychotherapy',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/ptsd-trauma-counseling-with-combination-of-psychotherapy',
          },
          {
            courseTitle: 'Bereavement and Grief Counselling',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/bereavement-and-grief-counselling',
          },
        ],
        noofcourses: 4,
      },
      // {
      //   title: 'Stress Management',
      //   image: HealthLogo.StressManagement,
      //   courses: [
      //     {
      //       courseTitle: 'Stress Management - Understanding Stress',
      //       courseImage: CourseImage.TotalSuccessTraning,
      //       level: 'Beginner',
      //       link: 'https://www.proprofs.com/training/course/?title=free-stress-management-understanding',
      //     },
      //     {
      //       courseTitle:
      //         'Stress Management : Practical Steps Ways to Deal with Stress',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Beginner',
      //       link: 'https://www.udemy.com/course/stress-management-practical-steps-ways-to-deal-with-stress/',
      //     },
      //     {
      //       courseTitle: 'Relieve your stress with 10 techniques',
      //       courseImage: CourseImage.Coursesity,
      //       level: 'Intermediate',
      //       link: 'https://coursesity.com/course-detail/relieve-your-stress-with-10-techniques',
      //     },
      //     {
      //       courseTitle:
      //         'Stress Management - Techniques for Coping with Stress',
      //       courseImage: CourseImage.Alison,
      //       level: 'Intermediate',
      //       link: 'https://alison.com/course/stress-management-techniques-for-coping-with-stress-revised',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      {
        title: 'Abnormal Psychology',
        image: PsychologyLogo.AbnormalPsychology,
        courses: [
          {
            courseTitle: 'DoaneX: Abnormal Psychology',
            courseImage: CourseImage.EdX,
            level: 'Beginner',
            link: 'https://www.edx.org/learn/abnormal-psychology/doane-university-abnormal-psychology?webview=false&campaign=Abnormal+Psychology&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fabnormal-psychology',
          },
          {
            courseTitle: 'Introduction to Abnormal Psychology',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/intro-abnormal-psych-53649',
          },
          {
            courseTitle: 'Introduction to Abnormal Psychology',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/intro-abnormal-psych',
          },
          {
            courseTitle: 'Abnormal Psychology',
            courseImage: CourseImage.LumenLearning,
            level: 'Intermediate',
            link: 'https://lumenlearning.com/courses/abnormal-psychology/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Child Psychology',
        image: PsychologyLogo.ChildPsychology,
        courses: [
          {
            courseTitle: 'Introduction to child psychology',
            courseImage: CourseImage.OpenUniversity,
            level: 'Beginner',
            link: 'https://www.open.edu/openlearn/education-development/childhood-youth/introduction-child-psychology/content-section-0?active-tab=description-tab',
          },
          {
            courseTitle: 'Introduction to child psychology',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/openlearn-education-development-childhood-youth-introduction-child-psychology-95538',
          },
          {
            courseTitle: 'Understanding child development',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/understanding-child-development-from-synapse-to-society',
          },
          {
            courseTitle: 'Identifying Child Abuse and Neglect',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/identifying-child-abuse-and-neglect',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Substance Abuse Treatment',
        image: PsychologyLogo.SubstanceAbuseTreatment,
        courses: [
          {
            courseTitle: 'Substance Use Disorder',
            courseImage: CourseImage.ClivendClinic,
            level: 'Beginner',
            link: 'https://my.clevelandclinic.org/health/diseases/16652-drug-addiction-substance-use-disorder-sud',
          },
          {
            courseTitle: 'Alcohol and Drug Abuse Recovery Program',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/alcohol-and-drug-abuse-recovery-program',
          },
          {
            courseTitle: 'Drug Use and Harm Reduction',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/drug-use-and-harm-reduction-60096',
          },
          {
            courseTitle: 'Signs of Substance Abuse and What to Do',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/awareness-of-substance-misuse',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Positive Psychology',
        image: PsychologyLogo.PositivePsycholgoy,
        courses: [
          {
            courseTitle: 'What Is Positive Psychology & Why Is It Important?',
            courseImage: CourseImage.PositivePsy,
            level: 'Beginner',
            link: 'https://positivepsychology.com/what-is-positive-psychology-definition/',
          },
          {
            courseTitle: 'Positive Psychology',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/positive-psychology',
          },
          {
            courseTitle: 'Positive Psychology: Applications and Interventions',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/positive-psychology-applications-8332',
          },
          {
            courseTitle: 'REBT - The Science Of Re-Programming Your Mind!',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/rebt-the-science-of-re-programming-your-mind',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Group Therapy',
        image: PsychologyLogo.GroupTherapy,
        courses: [
          {
            courseTitle:
              'Your Ultimate Group Therapy Guide (+ Activities & Ideas)',
            courseImage: CourseImage.PositivePsy,
            level: 'Beginner',
            link: 'https://positivepsychology.com/group-therapy/',
          },
          {
            courseTitle: 'What Is Group Therapy?',
            courseImage: CourseImage.Study,
            level: 'Beginner',
            link: 'https://study.com/learn/lesson/group-therapy-techniques-examples-what-is-group-therapy.html',
          },
          {
            courseTitle: 'Group Therapy',
            courseImage: CourseImage.GoodTherapy,
            level: 'Intermediate',
            link: 'https://www.goodtherapy.org/learn-about-therapy/modes/group-therapy',
          },
          {
            courseTitle: 'Speech Therapy for Effective Communication',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/speech-therapy-for-effective-communication',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Art Therapy',
        image: PsychologyLogo.ArtTherapy,
        courses: [
          {
            courseTitle: 'Peaceful Painting Demonstration / Art Therapy',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/peaceful-painting-demonstration-art-therapy',
          },
          {
            courseTitle: 'Healing with the Arts',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/healing-with-the-arts',
          },
          {
            courseTitle: 'Arts Therapy - Arts Therapy For Self Healing ',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/udemy-art-therapy-for-everyone-31753',
          },
          {
            courseTitle: 'Introduction to Art Therapy',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/introduction-to-art-therapy',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Emotional Intelligence',
        image: PsychologyLogo.EmotionalIntel,
        courses: [
          {
            courseTitle: 'Emotional Intelligence Tutorial',
            courseImage: CourseImage.MindLuster,
            level: 'Beginner',
            link: 'https://positivepsychology.com/what-is-positive-psychology-definition/',
          },
          {
            courseTitle: 'The Complete Emotional Intelligence Secret Formulas',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/the-complete-emotional-intelligence-secret-formulas',
          },
          {
            courseTitle: 'Emotional Intelligence',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/emotional-intelligence-a/',
          },
          {
            courseTitle: 'Develop Your Emotional Intelligence',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/develop-your-emotional-intelligence',
          },
        ],
        noofcourses: 4,
      },
    ],
  },
  {
    id: 5,
    mainTitle: 'Communication and Media',
    mainImage: courseLogo.Communication,
    mainCourses: [
      {
        title: 'Written Communication',
        image: CommunicationMediaLogo.WrittenCommunication,
        courses: [
          {
            courseTitle: 'Writing and the pursuit of inspiration',
            courseImage: CourseImage.GCFGlobal,
            level: 'Beginner',
            link: 'https://edu.gcfglobal.org/en/writing-skills/writing-and-the-pursuit-of-inspiration/1/#',
          },
          {
            courseTitle: 'A Complete Guide to Effective Written Communication',
            courseImage: CourseImage.Indeed,
            level: 'Beginner',
            link: 'https://www.indeed.com/career-advice/career-development/written-communication',
          },
          {
            courseTitle: 'Formal English Writing - Go to the Next Level!',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/formal-english-writing-course/',
          },
          {
            courseTitle: 'The Importance of Written Communication Skill',
            courseImage: CourseImage.GreatLearning,
            level: 'Intermediate',
            link: 'https://www.mygreatlearning.com/blog/the-importance-of-written-communication-skill/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Verbal Communication',
        image: CommunicationMediaLogo.VerbalCommunication,
        courses: [
          {
            courseTitle: 'What is Verbal Communication?',
            courseImage: CourseImage.SkillYouNeed,
            level: 'Beginner',
            link: 'https://www.skillsyouneed.com/ips/verbal-communication.html',
          },
          {
            courseTitle: 'Verbal Communications and Presentation Skills',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/verbal-communications-and-presentation-skills-204355',
          },
          {
            courseTitle: 'How to Develop Effective Verbal Communication Skills',
            courseImage: CourseImage.VirtualSpeech,
            level: 'Intermediate',
            link: 'https://virtualspeech.com/blog/verbal-communication-skills',
          },
          {
            courseTitle: 'Supervision Skills - Managing Employee Performance',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/supervision-skills-managing-employee-performance',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Visual Communication',
        image: CommunicationMediaLogo.VisualCommunication,
        courses: [
          {
            courseTitle: 'Visual Communication Design For Digital Media',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/swayam-visual-communication-design-for-digital-media-10103',
          },
          {
            courseTitle:
              'The value of visual communication in business and beyond',
            courseImage: CourseImage.Canva,
            level: 'Beginner',
            link: 'https://www.canva.com/learn/visual-communication/',
          },
          {
            courseTitle: 'Visual Communication for Sales Engineers',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/visual-communication/',
          },
          {
            courseTitle: 'Visual Communication',
            courseImage: CourseImage.Topper,
            level: 'Intermediate',
            link: 'https://www.toppr.com/guides/business-communication-and-ethics/intro-to-business-communication/visual-communication/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Media Literacy',
        image: CommunicationMediaLogo.MediaLiteracy,
        courses: [
          {
            courseTitle: 'What is media literacy and why does it matter?',
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/info/blog/what-is-media-literacy',
          },
          {
            courseTitle: 'Media Literacy in the Modern Age',
            courseImage: CourseImage.VeryWellMind,
            level: 'Beginner',
            link: 'https://www.verywellmind.com/what-is-media-literacy-5214468',
          },
          {
            courseTitle: 'What is Media Literacy?',
            courseImage: CourseImage.Study,
            level: 'Intermediate',
            link: 'https://study.com/academy/lesson/what-is-media-literacy-definition-importance-examples.html',
          },
          {
            courseTitle: 'Digital Media Literacy',
            courseImage: CourseImage.GCFGlobal,
            level: 'Intermediate',
            link: 'https://edu.gcfglobal.org/en/digital-media-literacy/#',
          },
        ],
        noofcourses: 4,
      },
      // {
      //   title: 'Public Speaking',
      //   image: CommunicationMediaLogo.PublicSpeaking,
      //   courses: [
      //     {
      //       courseTitle: 'Introduction to Public Speaking',
      //       courseImage: CourseImage.Coursera,
      //       level: 'Beginner',
      //       link: 'https://www.coursera.org/learn/public-speaking',
      //     },
      //     {
      //       courseTitle: 'Dynamic Public Speaking',
      //       courseImage: CourseImage.ClassCentral,
      //       level: 'Intermediate',
      //       link: 'https://www.classcentral.com/course/public-speaking-18879',
      //     },
      //     {
      //       courseTitle: 'HarvardX: Leadership: Creating Public Value',
      //       courseImage: CourseImage.EdX,
      //       level: 'Beginner',
      //       link: 'https://www.edx.org/learn/leadership/harvard-university-leadership-creating-public-value?index=product&objectID=course-0ecf7948-eba0-4787-a544-3d0e2197a151&webview=false&campaign=Leadership%3A+Creating+Public+Value&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fpublic-speaking',
      //     },
      //     {
      //       courseTitle:
      //         'Overcome the Fear of Public Speaking: 30 days to Confidence',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Intermediate',
      //       link: 'https://www.udemy.com/course/overcoming-the-fear-of-public-speaking-confident-in-30-days/',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      {
        title: 'Digital Media Production',
        image: CommunicationMediaLogo.DigitaMediaProduction,
        courses: [
          {
            courseTitle: 'Digital Media for Health Outcomes, English',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/digital-media-health-outcomes-english',
          },
          {
            courseTitle: "A Beginner's Guide to Film Genres Explore",
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/courses/a-beginners-guide-to-film-genres',
          },
          {
            courseTitle: 'Marketing Digital: Content & Community Manager',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/digital-marketing-universidad-galileo-marketing-d-10386',
          },
          {
            courseTitle: 'Diploma in Media and its Development',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/diploma-in-media-and-its-development',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Social Media Management',
        image: CommunicationMediaLogo.SocialMediaManagement,
        courses: [
          {
            courseTitle: 'Social Media Management',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/social-media-management?action=enroll',
          },
          {
            courseTitle: 'Get Started With Digital Marketing',
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/courses/beginning-your-digital-marketing-journey',
          },
          {
            courseTitle:
              'Social Media Management Platform: Social Report Tutorial',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/social-report-tutorial/',
          },
          {
            courseTitle: 'Social Media Management',
            courseImage: CourseImage.GreatLearning,
            level: 'Intermediate',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/social-media-management',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Storytelling',
        image: CommunicationMediaLogo.Storytelling,
        courses: [
          {
            courseTitle: 'The Ultimate Guide to Storytelling',
            courseImage: CourseImage.HubSpot,
            level: 'Beginner',
            link: 'https://blog.hubspot.com/marketing/storytelling',
          },
          {
            courseTitle: 'Your ultimate guide on how to be a good storyteller',
            courseImage: CourseImage.BetterUP,
            level: 'Beginner',
            link: 'https://www.betterup.com/blog/how-to-be-a-good-storyteller',
          },
          {
            courseTitle: 'MichiganX: Storytelling for Social Change',
            courseImage: CourseImage.EdX,
            level: 'Intermediate',
            link: 'https://www.edx.org/learn/social-justice/the-university-of-michigan-storytelling-for-social-change?webview=false&campaign=Storytelling+for+Social+Change&source=edx&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fstorytelling',
          },
          {
            courseTitle: 'Feature Writing: The Art of Telling Stories',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/feature-writing-the-art-of-telling-stories',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Journalism',
        image: CommunicationMediaLogo.Journalism,
        courses: [
          {
            courseTitle: 'Journalism, the future, and you!',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/journalism-the-future-and-you',
          },
          {
            courseTitle: 'Print and Broadcast Journalism',
            courseImage: CourseImage.Carrer360,
            level: 'Beginner',
            link: 'https://www.careers360.com/colleges/aspee-college-of-home-science-and-nutrition-sardarkrushinagar/print-and-broadcast-journalism-certification-course',
          },
          {
            courseTitle: 'Journalism in the Digital Age',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/journalism-in-the-digital-age-revised',
          },
          {
            courseTitle: 'Covering Immigration: A Resource for Journalists',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/classroom/youtube-covering-immigration-a-resource-for-journalists-91507',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Interviewing',
        image: CommunicationMediaLogo.Interviewing,
        courses: [
          {
            courseTitle: 'Interviewing Skills',
            courseImage: CourseImage.GCFGlobal,
            level: 'Beginner',
            link: 'https://edu.gcfglobal.org/en/interviewingskills/#',
          },
          {
            courseTitle: 'Getting Started with Interview Preparation',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/interview-preparation-free-course-skillup',
          },
          {
            courseTitle: 'Job Interview Skills Training Course',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/find-a-job-interview-skills-training-course/',
          },
          {
            courseTitle: 'Successful Interviewing',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/successful-interviewing-5473',
          },
        ],
        noofcourses: 4,
      },
      // {
      //   title: 'Graphic Design',
      //   image: CommunicationMediaLogo.GraphicDesign,
      //   courses: [
      //     {
      //       courseTitle: 'Beginning Graphic Design',
      //       courseImage: CourseImage.GCFGlobal,
      //       level: 'Beginner',
      //       link: 'https://edu.gcfglobal.org/en/beginning-graphic-design/?gad_source=1&gclid=Cj0KCQiAo7KqBhDhARIsAKhZ4uhzumfaNdVSsstVt9TjozobRIMUnXSoZ-eCAS4GlD7OjUgoqAygt8waAsq2EALw_wcB#',
      //     },
      //     {
      //       courseTitle: 'Graphic Design',
      //       courseImage: CourseImage.Alison,
      //       level: 'Beginner',
      //       link: 'https://alison.com/course/graphic-design',
      //     },
      //     {
      //       courseTitle: 'Learn to Design a Letterhead ',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Intermediate',
      //       link: 'https://www.udemy.com/course/learn-to-design-a-letterhead/',
      //     },
      //     {
      //       courseTitle: 'Intro to Graphic Design with Photoshop',
      //       courseImage: CourseImage.GreatLearning,
      //       level: 'Intermediate',
      //       link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/intro-to-graphic-design-with-photoshop',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      {
        title: 'Copywriting',
        image: CommunicationMediaLogo.CopyWriting,
        courses: [
          {
            courseTitle: 'Learn Copywriting Basics In a Few Minutes',
            courseImage: CourseImage.KoppyWriting,
            level: 'Beginner',
            link: 'https://copywritingcourse.com/free-copywriting-course/',
          },
          {
            courseTitle:
              'Copywriting for Beginners and Pros Free Course With Exercises',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/classroom/youtube-copywriting-for-beginners-and-pros-free-course-with-exercises-61648',
          },
          {
            courseTitle:
              'Copywriting Quick Start: Top FREE Writing Tools & Hacks',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/copywritingquickstart/',
          },
          {
            courseTitle:
              'Copywriting Mastery: Key Concepts for Effective Communication',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/copywriting-mastery-key-concepts-for-effective-communication',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Media Planning',
        image: CommunicationMediaLogo.MediaPlanning,
        courses: [
          {
            courseTitle: 'Media Planning and Strategy for Advertising',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/media-planning-and-strategy-for-advertising',
          },
          {
            courseTitle: 'Media Planning',
            courseImage: CourseImage.DigitalMarketingInstitute,
            level: 'Beginner',
            link: 'https://digitalmarketinginstitute.com/resources/lessons/strategy-and-planning_media-planning_z57u',
          },
          {
            courseTitle:
              'Media Planning & Buying in Digital Marketing Learning Pathway',
            courseImage: CourseImage.BaseCampDigital,
            level: 'Intermediate',
            link: 'https://basecampdigital.co/courses/media-planning-buying-in-digital-marketing-learning-pathway/',
          },
          {
            courseTitle:
              'Media Planning: What It Is + How to Write a Media Plan',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/articles/media-planning',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Digital Marketing',
        image: CommunicationMediaLogo.DigitalMarketing,
        courses: [
          {
            courseTitle:
              'Introduction to Digital Marketing Fundamentals Course',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/free-digital-marketing-basics-course-skillup',
          },
          {
            courseTitle: 'Digital Skills: Digital Marketing',
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/courses/digital-skills-digital-marketing',
          },
          {
            courseTitle: 'Digital Marketing and CRM for Increased Sales',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/digital-marketing-and-crm-for-increased-sales',
          },
          {
            courseTitle: 'Introduction to Digital Marketing',
            courseImage: CourseImage.GreatLearning,
            level: 'Intermediate',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-digital-marketing',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Crisis Communication',
        image: CommunicationMediaLogo.CrisisCommunication,
        courses: [
          {
            courseTitle: 'Crisis Management',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/crisis-management',
          },
          {
            courseTitle: 'Crisis Communications',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/crisis-communications',
          },
          {
            courseTitle: 'PRSM107: Crisis Communication',
            courseImage: CourseImage.Saylor,
            level: 'Beginner',
            link: 'https://learn.saylor.org/course/PRSM107',
          },
          {
            courseTitle: 'Crisis Communications',
            courseImage: CourseImage.BryPath,
            level: 'Intermediate',
            link: 'https://bryghtpath.com/products/intro-courses/crisis-communications-101/',
          },
        ],
        noofcourses: 4,
      },
    ],
  },
  {
    id: 6,
    mainTitle: 'Arts and Creative Expression',
    mainImage: courseLogo.ArtsandCreative,
    mainCourses: [
      {
        title: 'Drawing and Illustration',
        image: ArtsandCreativeLogo.DrawingandIllustration,
        courses: [
          {
            courseTitle:
              'Drawing for Beginners: How to Draw 25 Cartoons Step-by-Step',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/drawing-for-kids-learn-how-to-draw-cartoons-step-by-step/',
          },
          {
            courseTitle: "How to Draw: Free Beginner's Course",
            courseImage: CourseImage.RapidFireArt,
            level: 'Beginner',
            link: 'https://rapidfireart.com/how-to-draw-for-beginners/',
          },
          {
            courseTitle: 'Introduction to the Science of Drawing',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/introduction-to-the-science-of-drawing',
          },
          {
            courseTitle: 'How to Make a Comic Book',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/make-comic-books-5712',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Painting Techniques',
        image: ArtsandCreativeLogo.PaintingTechniques,
        courses: [
          {
            courseTitle: 'Oil/Acrylic Painting Techniques and Color Theory',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/oil-acrylic-painting-techniques-and-color-theory/',
          },
          {
            courseTitle: 'Tutorials for abstract painting',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/tutorials-for-abstract-painting',
          },
          {
            courseTitle: 'Painting using One Stroke Technique',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/painting-using-one-stroke-technique',
          },
          {
            courseTitle: 'Traditional Painting',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/classroom/youtube-traditional-painting-55056',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Digital Art and Design',
        image: ArtsandCreativeLogo.DigitalArtAndDesign,
        courses: [
          {
            courseTitle:
              'Midjourney for Beginners: Craft an Exquisite Piece of AI Art',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/projects/rudi-hinds-midjourney-for-beginners-craft-ai-art',
          },
          {
            courseTitle: 'Learning Digital Painting',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/learning-digital-painting',
          },
          {
            courseTitle: 'Introduction to Pixel Art',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/introduction-to-pixel-art',
          },
          {
            courseTitle: 'Generative Art and Computational Creativity',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/kadenze-generative-art-and-computational-creativity-4094',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Photography and Visual Arts',
        image: ArtsandCreativeLogo.Photography,
        courses: [
          {
            courseTitle: 'Introduction to Photography Basics',
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/courses/introduction-to-photography-basics',
          },
          {
            courseTitle:
              'Landscape Photography - Equipment Basics, Focusing and Filters',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/landscape-photography-equipment-basics-focusing-and-filters',
          },
          {
            courseTitle: 'An Introduction to Photography',
            courseImage: CourseImage.VisualEducation,
            level: 'Beginner',
            link: 'https://visualeducation.com/free-photography-course/#free-photography-course',
          },
          {
            courseTitle: 'The Art of Photography',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/open2study-the-art-of-photography-1560',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Sculpture and 3D Art',
        image: ArtsandCreativeLogo.Sculptureand3D,
        courses: [
          {
            courseTitle:
              'What are the Different Types of Three Dimensional Art?',
            courseImage: CourseImage.ArtDex,
            level: 'Beginner',
            link: 'https://www.artdex.com/what-are-the-different-types-of-three-dimensional-art/',
          },
          {
            courseTitle: '3D Modeling In Blender: Design Your First 3D Object',
            courseImage: CourseImage.SkillShare,
            level: 'Beginner',
            link: 'https://www.skillshare.com/en/classes/3D-Modeling-In-Blender-Design-Your-First-3D-Object/666497621',
          },
          {
            courseTitle: '3D Printing with Windows 10',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/3d-printing-with-windows-10',
          },
          {
            courseTitle: 'Sculpt “Ghost Rider” & flames in ZBrush',
            courseImage: CourseImage.TDtotal,
            level: 'Intermediate',
            link: 'https://3dtotal.com/tutorials/t/sculpt-ghost-rider-flames-in-zbrush',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Graphic Design Fundamentals',
        image: ArtsandCreativeLogo.GraphicDesing,
        courses: [
          {
            courseTitle: 'Beginning Graphic Design',
            courseImage: CourseImage.GCFGlobal,
            level: 'Beginner',
            link: 'https://edu.gcfglobal.org/en/beginning-graphic-design/?gad_source=1&gclid=Cj0KCQiAo7KqBhDhARIsAKhZ4uhzumfaNdVSsstVt9TjozobRIMUnXSoZ-eCAS4GlD7OjUgoqAygt8waAsq2EALw_wcB#',
          },
          {
            courseTitle: 'Graphic Design',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/graphic-design',
          },
          {
            courseTitle: 'Learn to Design a Letterhead ',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/learn-to-design-a-letterhead/',
          },
          {
            courseTitle: 'Intro to Graphic Design with Photoshop',
            courseImage: CourseImage.GreatLearning,
            level: 'Intermediate',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/intro-to-graphic-design-with-photoshop',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Mixed Media Art',
        image: ArtsandCreativeLogo.MixedMediaArt,
        courses: [
          {
            courseTitle: 'The Beginner’s Guide to Making Mixed Media Art',
            courseImage: CourseImage.Format,
            level: 'Beginner',
            link: 'https://www.format.com/magazine/resources/art/beginners-guide-mixed-media-art',
          },
          {
            courseTitle: 'Stamping in Mixed Media',
            courseImage: CourseImage.JerrysArt,
            level: 'Beginner',
            link: 'https://www.jerrysartarama.com/free-art-instruction-videos/collage-therapy-stamping-mixed-media-sharon-digiulio',
          },
          {
            courseTitle: 'How to Make Mixed Media Art: A Guide and Tutorial',
            courseImage: CourseImage.SkillShare,
            level: 'Beginner',
            link: 'https://www.skillshare.com/en/blog/how-to-make-mixed-media-art-a-guide-and-tutorial/',
          },
          {
            courseTitle: 'Mixed Media Art: Painting, Artists & Techniques',
            courseImage: CourseImage.Study,
            level: 'Intermediate',
            link: 'https://study.com/academy/lesson/mixed-media-art-techniques.html',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Creative Writing and Poetry',
        image: ArtsandCreativeLogo.CreativeWriting,
        courses: [
          {
            courseTitle: 'How to Write Poetry',
            courseImage: CourseImage.CreateWritingNow,
            level: 'Beginner',
            link: 'https://www.creative-writing-now.com/how-to-write-poetry.html',
          },
          {
            courseTitle: 'Intro to Procreate: Illustrating on the iPad',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.skillshare.com/en/tedx?clickid=3%3A%3AWLUydtxyPUazVqE07vQC6UkFVTvSiCXZ7UY0&irgwc=1&utm_content=4650&utm_term=Class+Central&utm_campaign=259799&affiliateRef=6595003&utm_medium=affiliate-referral&utm_source=IR&coupon=AFF30D23&t=Intro-to-Procreate-Illustrating-on-the-iPad-UPDATED-for-2023&sku=612500335',
          },
          {
            courseTitle: 'The Poetry of T.S.Eliot',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/the-poetry-of-t-s-eliot',
          },
          {
            courseTitle: 'Sharpened Visions: A Poetry Workshop',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/poetry-workshop',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Music Composition and Theory',
        image: ArtsandCreativeLogo.MusicComposing,
        courses: [
          {
            courseTitle: 'How to Compose Music',
            courseImage: CourseImage.ArtOfComosition,
            level: 'Beginner',
            link: 'https://www.artofcomposing.com/how-to-compose-music-101',
          },
          {
            courseTitle: 'Art of the MOOC: Experiments with Sound',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/experiments-with-sound-10762',
          },
          {
            courseTitle: 'Music Theory: Reading Rhythm',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/music-theory-reading-rhythm',
          },
          {
            courseTitle:
              'Approaching Music Theory: Melodic Forms and Simple Harmony',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/melodic-forms-simple-harmony',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Performing Arts - Acting and Theater',
        image: ArtsandCreativeLogo.PerformingARts,
        courses: [
          {
            courseTitle: '7 Ways To Introduce Students To Performing Arts',
            courseImage: CourseImage.ConnectionAcadamy,
            level: 'Beginner',
            link: 'https://www.connectionsacademy.com/support/resources/article/7-ways-to-introduce-students-to-performing-arts/',
          },
          {
            courseTitle: 'Explore Performing Arts',
            courseImage: CourseImage.Study,
            level: 'Beginner',
            link: 'https://study.com/learn/performing-arts.html',
          },
          {
            courseTitle: 'Essential Acting Skills',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/essential-acting-skills',
          },
          {
            courseTitle: 'Getting Your Film off the Ground',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/film-off-ground-15230',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Dance and Choreography',
        image: ArtsandCreativeLogo.DanceandChoreography,
        courses: [
          {
            courseTitle: '10 Easy Dance Routines To Learn At Home',
            courseImage: CourseImage.Steezy,
            level: 'Beginner',
            link: 'https://www.steezy.co/posts/easy-choreography',
          },
          {
            courseTitle: 'How to Choreograph a Dance',
            courseImage: CourseImage.WikiHow,
            level: 'Beginner',
            link: 'https://www.wikihow.com/Choreograph-a-Dance',
          },
          {
            courseTitle: 'How to learn dance at home: A step by step guide',
            courseImage: CourseImage.RedBull,
            level: 'Beginner',
            link: 'https://www.redbull.com/in-en/how-to-learn-dance-at-home',
          },
          {
            courseTitle: 'Learn Your First Dance For Your Wedding',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/dmp-dance-tutorial-speechless/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Film and Video Production',
        image: ArtsandCreativeLogo.FilmandVideo,
        courses: [
          {
            courseTitle: 'An overview of video production.',
            courseImage: CourseImage.Adobe,
            level: 'Beginner',
            link: 'https://www.adobe.com/in/creativecloud/video/discover/video-production.html',
          },
          {
            courseTitle: 'How to Create Video for Online Courses',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/how-to-create-video-for-online-courses',
          },
          {
            courseTitle: 'Understanding the Essentials of Video Production',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/understanding-the-essentials-of-video-production',
          },
          {
            courseTitle: 'Video Editing Basics',
            courseImage: CourseImage.GreatLearning,
            level: 'Beginner',
            link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/video-editing-basics',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Fashion Design and Styling',
        image: ArtsandCreativeLogo.FashionDesing,
        courses: [
          {
            courseTitle:
              '25 Ways to Develop Your Fashion Knowledge and Skills for Free',
            courseImage: CourseImage.FashionStudentHub,
            level: 'Beginner',
            link: 'https://www.thefashionstudenthub.com/blog/25-Ways-to-develop-Your-Fashion-Knowledge-and-Skills-for-Free',
          },
          {
            courseTitle: 'Fashion as Design: From Coursera',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/fashion-design',
          },
          {
            courseTitle: 'Fashion Design and Styling',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/fashion-design-and-styling',
          },
          {
            courseTitle: 'Fashion as Design',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/fashion-design-9416',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Typography and Lettering',
        image: ArtsandCreativeLogo.Typography,
        courses: [
          {
            courseTitle: 'How to Design a Typographic Poster',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/how-to-design-a-typographic-poster/',
          },
          {
            courseTitle: 'Introduction to Typography',
            courseImage: CourseImage.RapidFireArt,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/typography',
          },
          {
            courseTitle: 'Tricks and Techniques of Logo Design',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/tricks-and-techniques-of-logo-design',
          },
          {
            courseTitle: 'Introduction to Typography',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/typography-5444',
          },
        ],
        noofcourses: 4,
      },
      // {
      //   title: 'Visual Communication Design',
      //   image: ArtsandCreativeLogo.VisualCommunication,
      //   courses: [
      //     {
      //       courseTitle: 'Visual Communication Design For Digital Media',
      //       courseImage: CourseImage.ClassCentral,
      //       level: 'Beginner',
      //       link: 'https://www.classcentral.com/course/swayam-visual-communication-design-for-digital-media-10103',
      //     },
      //     {
      //       courseTitle:
      //         'The value of visual communication in business and beyond',
      //       courseImage: CourseImage.Canva,
      //       level: 'Beginner',
      //       link: 'https://www.canva.com/learn/visual-communication/',
      //     },
      //     {
      //       courseTitle: 'Visual Communication for Sales Engineers',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Beginner',
      //       link: 'https://www.udemy.com/course/visual-communication/',
      //     },
      //     {
      //       courseTitle: 'Visual Communication',
      //       courseImage: CourseImage.Topper,
      //       level: 'Beginner',
      //       link: 'https://www.toppr.com/guides/business-communication-and-ethics/intro-to-business-communication/visual-communication/',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      {
        title: 'Animation and Motion Graphics',
        image: ArtsandCreativeLogo.Animation,
        courses: [
          {
            courseTitle: 'Get Started with Motion Graphics!',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/get-started-with-motion-graphics',
          },
          {
            courseTitle: 'How to Animate Logos for Companies & Brands',
            courseImage: CourseImage.RapidFireArt,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/living-logos-animation-simple-after-effects/',
          },
          {
            courseTitle: 'Principles of Animation',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/principles-of-animation',
          },
          {
            courseTitle: 'Introduction to Animation Fundamentals Course',
            courseImage: CourseImage.SimpleLearn,
            level: 'Beginner',
            link: 'https://www.simplilearn.com/animation-basics-course-free-skillup',
          },
        ],
        noofcourses: 4,
      },
    ],
  },
  {
    id: 7,
    mainTitle: 'Personal Development',
    mainImage: courseLogo.PersonalDevelopment,
    mainCourses: [
      // {
      //   title: 'Communication',
      //   image: PersonalDevLogo.Communication,
      //   courses: [
      //     {
      //       courseTitle:
      //         'How to speak to anyone & be fearless - in less than 55 min',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Beginner',
      //       link: 'https://www.udemy.com/course/fearless-public-speaker-bootcamp-by-ricky-mendoza/',
      //     },
      //     {
      //       courseTitle: 'Effective communication',
      //       courseImage: CourseImage.GreatLearning,
      //       level: 'Beginner',
      //       link: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/effective-communication',
      //     },
      //     {
      //       courseTitle: 'Business English Communication Skills Specialization',
      //       courseImage: CourseImage.Coursera,
      //       level: 'Intermediate',
      //       link: 'https://www.coursera.org/specializations/business-english?action=enroll&aid=true#courses',
      //     },
      //     {
      //       courseTitle: 'How to Stay Productive at Work',
      //       courseImage: CourseImage.Alison,
      //       level: 'Intermediate',
      //       link: 'https://alison.com/course/how-to-stay-productive-at-work',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      // {
      //   title: 'Emotional Intelligence',
      //   image: PersonalDevLogo.EmotionalIntel,
      //   courses: [
      //     {
      //       courseTitle: 'Emotional Intelligence Tutorial',
      //       courseImage: CourseImage.MindLuster,
      //       level: 'Beginner',
      //       link: 'https://positivepsychology.com/what-is-positive-psychology-definition/',
      //     },
      //     {
      //       courseTitle: 'The Complete Emotional Intelligence Secret Formulas',
      //       courseImage: CourseImage.Coursesity,
      //       level: 'Beginner',
      //       link: 'https://coursesity.com/course-detail/the-complete-emotional-intelligence-secret-formulas',
      //     },
      //     {
      //       courseTitle: 'Emotional Intelligence',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Intermediate',
      //       link: 'https://www.udemy.com/course/emotional-intelligence-a/',
      //     },
      //     {
      //       courseTitle: 'Develop Your Emotional Intelligence',
      //       courseImage: CourseImage.Alison,
      //       level: 'Intermediate',
      //       link: 'https://alison.com/course/develop-your-emotional-intelligence',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      // {
      //   title: 'Time Management',
      //   image: PersonalDevLogo.TimeManagement,
      //   courses: [
      //     {
      //       courseTitle:
      //         'Top 16 Time Management Skills to Help You Become a Success',
      //       courseImage: CourseImage.SimpleLearn,
      //       level: 'Beginner',
      //       link: 'https://www.simplilearn.com/time-management-skills-article',
      //     },
      //     {
      //       courseTitle: '10 tips for mastering time management at work',
      //       courseImage: CourseImage.LucideChart,
      //       level: 'Beginner',
      //       link: 'https://www.lucidchart.com/blog/time-management-at-work',
      //     },
      //     {
      //       courseTitle: '6 Strategies to Better Manage Your Time',
      //       courseImage: CourseImage.Coursera,
      //       level: 'Intermediate',
      //       link: 'https://www.coursera.org/articles/time-management',
      //     },
      //     {
      //       courseTitle: 'A Mini Course on Time Management',
      //       courseImage: CourseImage.Udemy,
      //       level: 'Intermediate',
      //       link: 'https://www.udemy.com/course/manageyourtime/',
      //     },
      //   ],
      //   noofcourses: 4,
      // },
      {
        title: 'Public Speaking',
        image: PersonalDevLogo.PublicSpeaking,
        courses: [
          {
            courseTitle: 'Introduction to Public Speaking',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/public-speaking',
          },
          {
            courseTitle: 'Dynamic Public Speaking',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/public-speaking-18879',
          },
          {
            courseTitle: 'HarvardX: Leadership: Creating Public Value',
            courseImage: CourseImage.EdX,
            level: 'Beginner',
            link: 'https://www.edx.org/learn/leadership/harvard-university-leadership-creating-public-value?index=product&objectID=course-0ecf7948-eba0-4787-a544-3d0e2197a151&webview=false&campaign=Leadership%3A+Creating+Public+Value&source=edX&product_category=course&placement_url=https%3A%2F%2Fwww.edx.org%2Flearn%2Fpublic-speaking',
          },
          {
            courseTitle:
              'Overcome the Fear of Public Speaking: 30 days to Confidence',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/overcoming-the-fear-of-public-speaking-confident-in-30-days/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Personal Development',
        image: PersonalDevLogo.PersonalDevelopment,
        courses: [
          {
            courseTitle: 'What is Personal Development?',
            courseImage: CourseImage.SkillYouNeed,
            level: 'Beginner',
            link: 'https://www.skillsyouneed.com/ps/personal-development.html',
          },
          {
            courseTitle:
              'Top Personal Development Skills To Improve Your Career',
            courseImage: CourseImage.Indeed,
            level: 'Intermediate',
            link: 'https://in.indeed.com/career-advice/career-development/personal-development-skills',
          },
          {
            courseTitle: 'Child Care - Health and Safety',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/child-care-health-and-safety',
          },
          {
            courseTitle: 'Improving Personal Exercise, Health and Nutrition',
            courseImage: CourseImage.ReedCourses,
            level: 'Intermediate',
            link: 'https://www.reed.co.uk/courses/level-2-certificate-in-improving-personal-exercise-health-and-nutrition/279444#/courses/free/personal-development',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Mindfulness',
        image: PersonalDevLogo.MindFulness,
        courses: [
          {
            courseTitle: 'See how mindfulness helps you live in the moment',
            courseImage: CourseImage.MayoClinic,
            level: 'Beginner',
            link: 'https://www.mayoclinic.org/healthy-lifestyle/consumer-health/in-depth/mindfulness-exercises/art-20046356#:~:text=Mindfulness%20is%20a%20type%20of,mind%20and%20help%20reduce%20stress.',
          },
          {
            courseTitle: 'How to Get Started with Practicing Mindfulness',
            courseImage: CourseImage.Psychcentral,
            level: 'Intermediate',
            link: 'https://psychcentral.com/health/new-to-mindfulness-how-to-get-started',
          },
          {
            courseTitle:
              'Mindfulness Meditation: The Path To Wisdom And Success',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/mindfulness-meditation-the-path-to-wisdom-and-success',
          },
          {
            courseTitle: 'The Work That Reconnects',
            courseImage: CourseImage.MindFulNess,
            level: 'Intermediate',
            link: 'https://mindfulnessexercises.com/free-online-mindfulness-courses/the-work-that-reconnects/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Sound Therapy',
        image: PersonalDevLogo.SoundTherapy,
        courses: [
          {
            courseTitle: 'What You Should Know About Himalayan Singing Bowls',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/things-you-should-know-about-himalayan-singing-bowls/',
          },
          {
            courseTitle: 'Your Healing Voice',
            courseImage: CourseImage.SoundHealingAcadamy,
            level: 'Intermediate',
            link: 'https://www.academyofsoundhealing.com/your-healing-voice-free-course',
          },
          {
            courseTitle: 'The Ancient Art of Sound Therapy',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/the-ancient-art-of-sound-therapy',
          },
          {
            courseTitle:
              'Sound Therapy: The journey of Understanding Self | Dr Anju Sharma',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/classroom/youtube-sound-therapy-the-journey-of-understanding-self-dr-anju-sharma-tedxkalbadevi-203968',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Life Purpose',
        image: PersonalDevLogo.LifePurpose,
        courses: [
          {
            courseTitle: 'Seven Ways to Find Your Purpose in Life',
            courseImage: CourseImage.GreaterGood,
            level: 'Beginner',
            link: 'https://greatergood.berkeley.edu/article/item/seven_ways_to_find_your_purpose_in_life',
          },
          {
            courseTitle:
              "Finding Your Life's Purpose & Manifesting your Ideal Life",
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/finding-your-lifes-purpose-manifesting-your-ideal-life/',
          },
          {
            courseTitle: 'How to Discover Your Purpose in Life',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/how-to-discover-your-purpose-in-life',
          },
          {
            courseTitle:
              'Finding Purpose and Meaning In Life: Living for What Matters Most',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://www.classcentral.com/course/finding-purpose-and-meaning-in-life-19464',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Habits',
        image: PersonalDevLogo.Habits,
        courses: [
          {
            courseTitle: '11 Good Study Habits to Develop',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/articles/study-habits',
          },
          {
            courseTitle: 'Habit Learning',
            courseImage: CourseImage.ScienceDirect,
            level: 'Intermediate',
            link: 'https://www.sciencedirect.com/topics/psychology/habit-learning',
          },
          {
            courseTitle: '8 Highly Effective Study Habits',
            courseImage: CourseImage.Psychcentral,
            level: 'Beginner',
            link: 'https://psychcentral.com/health/highly-effective-study-habits',
          },
          {
            courseTitle: 'Building Healthy Daily Habits',
            courseImage: CourseImage.ClassCentral,
            level: 'Intermediate',
            link: 'https://alison.com/course/building-healthy-daily-habits',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Focus Mastery',
        image: PersonalDevLogo.FocusMastery,
        courses: [
          {
            courseTitle:
              'Master Your Focus: Boost Productivity with Hyperfocus',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/focus-mastery-with-abdulsalam-chaudhary/',
          },
          {
            courseTitle: 'FOCUS- The hidden driver of excellence!',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/focus-the-hidden-driver-of-excellence',
          },
          {
            courseTitle: 'Willpower and Focus',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/willpower-and-focus',
          },
          {
            courseTitle:
              'How to Focus: the Definitive Guide to Getting and Staying Focused',
            courseImage: CourseImage.InsideOutMastery,
            level: 'Intermediate',
            link: 'https://insideoutmastery.com/focus/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Listening Skills',
        image: PersonalDevLogo.ListeningSkills,
        courses: [
          {
            courseTitle: '10 tips for active listening',
            courseImage: CourseImage.Britishheart,
            level: 'Beginner',
            link: 'https://www.bhf.org.uk/informationsupport/heart-matters-magazine/wellbeing/how-to-talk-about-health-problems/active-listening',
          },
          {
            courseTitle:
              '10 Ways To Improve Your Listening Skills (With Examples)',
            courseImage: CourseImage.Indeed,
            level: 'Intermediate',
            link: 'https://www.indeed.com/career-advice/career-development/how-to-improve-listening-skills',
          },
          {
            courseTitle:
              'How to improve listening skills in English: Tips, techniques, and resources',
            courseImage: CourseImage.PrePly,
            level: 'Beginner',
            link: 'https://preply.com/en/blog/improve-english-listening-skills/',
          },
          {
            courseTitle: '7 ways to improve your listening skills',
            courseImage: CourseImage.FutureLearn,
            level: 'Intermediate',
            link: 'https://www.futurelearn.com/info/blog/general/7-ways-improve-your-listening-skills',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Love',
        image: PersonalDevLogo.Love,
        courses: [
          {
            courseTitle: 'How to Learn to Love',
            courseImage: CourseImage.WikiHow,
            level: 'Beginner',
            link: 'https://www.wikihow.com/Learn-to-Love#:~:text=A%20big%20part%20of%20communicating,thoughts%2C%20ideas%2C%20and%20feelings.',
          },
          {
            courseTitle: 'Learn To Love Moree',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/learn-to-love-more/',
          },
          {
            courseTitle: 'Healthy Relationship Skills',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/course/youtube-healthy-relationship-skills-95072',
          },
          {
            courseTitle: 'Love as a Force for Social Justice',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/love-social-justice',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Dating',
        image: PersonalDevLogo.Dating,
        courses: [
          {
            courseTitle:
              '10 Life Skills You Should Have Before You Get Into a Relationship',
            courseImage: CourseImage.OneLoveF,
            level: 'Beginner',
            link: 'https://www.joinonelove.org/learn/10-life-skills-get-relationship/',
          },
          {
            courseTitle:
              '9 Dating Lessons I Learned The Hard Way (So You Don’t Have To)',
            courseImage: CourseImage.LoveFullMind,
            level: 'Intermediate',
            link: 'https://www.academyofsoundhealing.com/your-healing-voice-free-course',
          },
          {
            courseTitle: 'The Virtues and Downsides of Online Dating',
            courseImage: CourseImage.Pew,
            level: 'Beginner',
            link: 'https://www.pewresearch.org/internet/2020/02/06/the-virtues-and-downsides-of-online-dating/',
          },
          {
            courseTitle:
              '7 Types Of Dating—Different Ways To Meet Your New Match ',
            courseImage: CourseImage.Regain,
            level: 'Intermediate',
            link: 'https://www.regain.us/advice/dating/7-types-of-dating-different-ways-to-meet-your-new-match/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Spiritual Healing',
        image: PersonalDevLogo.SpritualHealing,
        courses: [
          {
            courseTitle:
              'Energy Healing: An Insightful discussion on Quantum Healing',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/quantum-healing-introduction/',
          },
          {
            courseTitle: '3 Steps to Becoming a Spiritual Healer',
            courseImage: CourseImage.NatualTherapy,
            level: 'Intermediate',
            link: 'https://www.naturaltherapypages.com.au/article/3-steps-becoming-spiritual-healer',
          },
          {
            courseTitle: 'An Introduction to Spiritual Life Coaching',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/an-introduction-to-spiritual-life-coaching',
          },
          {
            courseTitle: 'Spiritual Healing',
            courseImage: CourseImage.ScienceDirect,
            level: 'Intermediate',
            link: 'https://www.sciencedirect.com/topics/medicine-and-dentistry/spiritual-healing',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Chakra',
        image: PersonalDevLogo.Chakra,
        courses: [
          {
            courseTitle:
              "A Beginner's Guide to the 7 Chakras and Their Meanings",
            courseImage: CourseImage.HealthLine,
            level: 'Beginner',
            link: 'https://www.healthline.com/health/fitness-exercise/7-chakras',
          },
          {
            courseTitle: 'Your Complete Guide To The Body Chakras',
            courseImage: CourseImage.Forbus,
            level: 'Intermediate',
            link: 'https://www.forbes.com/health/body/body-chakras-guide/',
          },
          {
            courseTitle: 'A Primer of the Chakra System',
            courseImage: CourseImage.Chopra,
            level: 'Beginner',
            link: 'https://chopra.com/articles/what-is-a-chakra',
          },
          {
            courseTitle: 'Free Yoga Tutorial - Exploring The Chakras',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/free-yoga-tutorial-exploring-the-chakras',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Presentation Skills',
        image: PersonalDevLogo.PresentationSkills,
        courses: [
          {
            courseTitle: 'Presentation Skills',
            courseImage: CourseImage.SkillYouNeed,
            level: 'Beginner',
            link: 'https://www.skillsyouneed.com/presentation-skills.html',
          },
          {
            courseTitle:
              'What Are Effective Presentation Skills (How to Improve Them)',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/articles/presentation-skills',
          },
          {
            courseTitle: 'Presentation Skills',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/presentation-skills?utm_adgroup=&utm_source=google&utm_medium=cpc&utm_campaign=Performance-Max_Tier-5_Careers&gclid=Cj0KCQiAo7KqBhDhARIsAKhZ4uhqqseiA_swaGNXmcikOmm_ncaq-XJ5CVkHrWnG-y_kNkhD0o793VAaAj7lEALw_wcB',
          },
          {
            courseTitle: 'How to Give a Killer Presentation',
            courseImage: CourseImage.HBR,
            level: 'Intermediate',
            link: 'https://hbr.org/2013/06/how-to-give-a-killer-presentation',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Writing',
        image: PersonalDevLogo.Writing,
        courses: [
          {
            courseTitle: '7 Ways to Improve Your Writing Skills',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/articles/writing-skills',
          },
          {
            courseTitle: '10 Tips To Improve Your Writing Skills',
            courseImage: CourseImage.Indeed,
            level: 'Intermediate',
            link: 'https://in.indeed.com/career-advice/career-development/writing-skills',
          },
          {
            courseTitle: '16 Easy Ways to Improve Your Writing Skills',
            courseImage: CourseImage.WordSteam,
            level: 'Beginner',
            link: 'https://www.wordstream.com/blog/ws/2014/08/07/improve-writing-skills',
          },
          {
            courseTitle: 'English Writing Skills',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/english-writing-skills-revised',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Body Language',
        image: PersonalDevLogo.BodyLanguage,
        courses: [
          {
            courseTitle:
              'Importance of Body Language Body Language Helps in Personality Development',
            courseImage: CourseImage.CollegeMarker,
            level: 'Beginner',
            link: 'https://collegemarker.com/blogs/how-body-language-helps-in-personality-development/',
          },
          {
            courseTitle: '07 Body Language Habits of Successful People',
            courseImage: CourseImage.LearnX,
            level: 'Intermediate',
            link: 'https://www.learnex.in/personality-development-tips-body-language-habits-skillopedia/',
          },
          {
            courseTitle: 'An Introduction to Body Language and its Components',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/an-introduction-to-body-language-and-its-components',
          },
          {
            courseTitle: 'Body language: Key to professional Success',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/body-language-key-to-professional-success',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Confidence',
        image: PersonalDevLogo.Confidence,
        courses: [
          {
            courseTitle:
              'How to build confidence: 5 tips for being more confident',
            courseImage: CourseImage.FutureLearn,
            level: 'Beginner',
            link: 'https://www.futurelearn.com/info/blog/general/how-to-build-confidence-5-tips-being-more-confident#:~:text=Start%20building%20confidence,-Confidence%20is%20an&text=A%20lack%20of%20confidence%20can,work%20towards%20being%20more%20confident.',
          },
          {
            courseTitle: 'Building Confidence',
            courseImage: CourseImage.SkillYouNeed,
            level: 'Intermediate',
            link: 'https://www.skillsyouneed.com/ps/confidence.html',
          },
          {
            courseTitle:
              'Building Self-Confidence: 10 Ways To Boost Your Confidence',
            courseImage: CourseImage.Indeed,
            level: 'Beginner',
            link: 'https://www.indeed.com/career-advice/career-development/ways-to-boost-your-confidence',
          },
          {
            courseTitle:
              'Overcoming Imposter Syndrome: Identify the Patterns Undermining Your Confidence',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/overcoming-imposter-syndrome-free-online-course-futurelearn',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Social Skills',
        image: PersonalDevLogo.SocialSkills,
        courses: [
          {
            courseTitle: '10 Ways To Develop and Improve Your Social Skills',
            courseImage: CourseImage.Indeed,
            level: 'Beginner',
            link: 'https://www.indeed.com/career-advice/career-development/developing-social-skills',
          },
          {
            courseTitle: 'How To Improve Your Social Skill?',
            courseImage: CourseImage.Study,
            level: 'Intermediate',
            link: 'https://study.com/academy/lesson/how-to-improve-social-skills.html',
          },
          {
            courseTitle: 'What are Social Skills?',
            courseImage: CourseImage.SkillYouNeed,
            level: 'Beginner',
            link: 'https://www.skillsyouneed.com/ips/social-skills.html',
          },
          {
            courseTitle: 'Soft Skills for Hospitality Professionals',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/soft-skills-for-hospitality-professionals',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Master Your Emotion',
        image: PersonalDevLogo.MasterYourEmotion,
        courses: [
          {
            courseTitle: '6 Steps To Mastering Your Emotions in 2023',
            courseImage: CourseImage.PersonalDevZone,
            level: 'Beginner',
            link: 'https://personal-development-zone.com/mastering-your-emotions/',
          },
          {
            courseTitle:
              'Master Your Emotions: A Practical Guide to Overcome Negativity and Better Manage Your Feelings',
            courseImage: CourseImage.GoodReads,
            level: 'Intermediate',
            link: 'https://www.goodreads.com/en/book/show/40078926',
          },
          {
            courseTitle: 'How to Become the Boss of Your Emotions',
            courseImage: CourseImage.HealthLine,
            level: 'Beginner',
            link: 'https://www.healthline.com/health/how-to-control-your-emotions',
          },
          {
            courseTitle: 'Mind Masters - Calming Your Mind and Emotions',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/mind-masters-calming-your-mind-and-emotions/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Anger Management',
        image: PersonalDevLogo.AngerManagement,
        courses: [
          {
            courseTitle: 'Anger Management',
            courseImage: CourseImage.SkillYouNeed,
            level: 'Beginner',
            link: 'https://www.skillsyouneed.com/ps/anger-management.html',
          },
          {
            courseTitle: 'Culture of Peace',
            courseImage: CourseImage.Coursesity,
            level: 'Intermediate',
            link: 'https://coursesity.com/course-detail/culture-of-peace',
          },
          {
            courseTitle: 'Fundamentals of Domestic Violence and Abuse',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/fundamentals-of-domestic-violence-and-abuse',
          },
          {
            courseTitle: 'Anger Management - Helicopter Approach',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/anger-management-rl/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Lucid Dreaming',
        image: PersonalDevLogo.LucidDreaming,
        courses: [
          {
            courseTitle: 'How to Lucid Dream: Expert Tips and Tricks',
            courseImage: CourseImage.SleepFoundataion,
            level: 'Beginner',
            link: 'https://www.sleepfoundation.org/dreams/lucid-dreams#:~:text=The%20popularity%20of%20self%2Dinduced,and%20distress%20associated%20with%20nightmares.',
          },
          {
            courseTitle: 'Lucid Dreaming: How to Lucid Dream in 5 Steps',
            courseImage: CourseImage.MasterClass,
            level: 'Intermediate',
            link: 'https://www.masterclass.com/articles/how-to-lucid-dream',
          },
          {
            courseTitle: 'How to Lucid Dream',
            courseImage: CourseImage.WikiHow,
            level: 'Beginner',
            link: 'https://www.wikihow.com/Lucid-Dream',
          },
          {
            courseTitle: 'Enhance Lucid Dreaming With Meditation',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/enhance-lucid-dreaming-with-meditation/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Goal Setting',
        image: PersonalDevLogo.GoalSetting,
        courses: [
          {
            courseTitle: 'How to Use SMART Goals: Achieve More in Less Time',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/goal-setting/',
          },
          {
            courseTitle:
              '20 Achievable Goals To Set for Your Personal Development',
            courseImage: CourseImage.Indeed,
            level: 'Intermediate',
            link: 'https://www.indeed.com/career-advice/career-development/list-of-goals-set-for-yourself',
          },
          {
            courseTitle: 'Goal Setting Mastery',
            courseImage: CourseImage.Alison,
            level: 'Beginner',
            link: 'https://alison.com/course/goal-setting-mastery',
          },
          {
            courseTitle:
              'What Are Professional Development Goals? 10 Examples + How to Set Them',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/articles/professional-development-goals',
          },
        ],
        noofcourses: 4,
      },
    ],
  },
  {
    id: 8,
    mainTitle: 'Music',
    mainImage: courseLogo.Music,
    mainCourses: [
      {
        title: 'Guitar',
        image: MusicLogo.Guitar,
        courses: [
          {
            courseTitle: 'First guitar lesson for beginners: Learn the basics',
            courseImage: CourseImage.PickUpMusic,
            level: 'Beginner',
            link: 'https://www.pickupmusic.com/blog/first-guitar-lesson-for-beginners-learn-the-basics',
          },
          {
            courseTitle: 'How to Play Guitar: 12 Steps to Playing the Guitar',
            courseImage: CourseImage.Yousician,
            level: 'Intermediate',
            link: 'https://yousician.com/blog/how-to-play-guitar',
          },
          {
            courseTitle: 'Beginner Guitar Course',
            courseImage: CourseImage.JustinGuitar,
            level: 'Beginner',
            link: 'https://www.justinguitar.com/classes/beginner-guitar-course-grade-one',
          },
          {
            courseTitle: 'How to Play Guitar',
            courseImage: CourseImage.WikiHow,
            level: 'Intermediate',
            link: 'https://www.wikihow.com/Play-Guitar',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Piano',
        image: MusicLogo.Piano,
        courses: [
          {
            courseTitle: 'The best guide to learning piano',
            courseImage: CourseImage.FlowKey,
            level: 'Beginner',
            link: 'https://www.flowkey.com/en/piano-guide',
          },
          {
            courseTitle: 'How to Play the Piano',
            courseImage: CourseImage.WikiHow,
            level: 'Intermediate',
            link: 'https://www.wikihow.com/Play-the-Piano',
          },
          {
            courseTitle: 'Piano Lessons For Absolute Beginners',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/beginnerpianolessons/',
          },
          {
            courseTitle: 'Piano Improvisation for Music Production',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/piano-improvisation-for-music-production',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Violin',
        image: MusicLogo.Violin,
        courses: [
          {
            courseTitle: 'How to Play the Violin',
            courseImage: CourseImage.WikiHow,
            level: 'Beginner',
            link: 'https://www.wikihow.com/Play-the-Violin',
          },
          {
            courseTitle: 'Learn to Play Violin in 20 Steps',
            courseImage: CourseImage.MeadowLark,
            level: 'Intermediate',
            link: 'https://meadowlarkviolin.com/violinblog/learn-to-play-violin-yourself-20-steps',
          },
          {
            courseTitle: 'Learn How to Play the Violin - Violin Basics',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/violin-basics/',
          },
          {
            courseTitle: 'Intermediate violin-viola course',
            courseImage: CourseImage.SkillShare,
            level: 'Intermediate',
            link: 'https://www.skillshare.com/en/classes/Intermediate-violin-viola-course/1127866098',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Drums',
        image: MusicLogo.Drums,
        courses: [
          {
            courseTitle: 'How To Play Drums (And Teach Yourself)',
            courseImage: CourseImage.Drumeo,
            level: 'Beginner',
            link: 'https://www.drumeo.com/beat/how-to-play-drums/',
          },
          {
            courseTitle: 'How to Play Drums',
            courseImage: CourseImage.WikiHow,
            level: 'Intermediate',
            link: 'https://www.wikihow.com/Play-Drums',
          },
          {
            courseTitle:
              'Free Drums Tutorial - Producing Drums with Ableton Live and Drum Rack',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/free-drums-tutorial-producing-drums-with-ableton-live-and-drum-rack',
          },
          {
            courseTitle:
              'Drum Lessons with ULTIMATE DRUMMING Intermediate R&R #4',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/intermediate-drum-lessons-with-ultimate-drumming-course-4/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Harmonica',
        image: MusicLogo.Harmonic,
        courses: [
          {
            courseTitle:
              'Play Love Me Do by the Beatles; the riff and the whole song',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/play-love-me-do-by-the-beatles-the-riff-and-the-whole-song/',
          },
          {
            courseTitle: 'Harmonica',
            courseImage: CourseImage.Unacadamy,
            level: 'Intermediate',
            link: 'https://unacademy.com/course/harmonica-442/9YYNJ8TW',
          },
          {
            courseTitle:
              'The Ultimate Harmonica Lesson - 20 Techniques & Exercises - How to Play',
            courseImage: CourseImage.ClassCentral,
            level: 'Beginner',
            link: 'https://www.classcentral.com/classroom/youtube-the-ultimate-harmonica-lesson-20-techniques-exercises-how-to-play-162985',
          },
          {
            courseTitle: 'How to Play a Harmonica',
            courseImage: CourseImage.WikiHow,
            level: 'Intermediate',
            link: 'https://www.wikihow.com/Play-a-Harmonica',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Music Mixing',
        image: MusicLogo.MusicMixing,
        courses: [
          {
            courseTitle:
              'Mixing with FabFilter: Compression with FabFilter Pro-C2',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/mixing-with-fabfilter-compression-with-fabfilter-pro-c2/',
          },
          {
            courseTitle: 'How to Mix Music? A Beginners Guide to Audio Mixing',
            courseImage: CourseImage.SoundGym,
            level: 'Intermediate',
            link: 'https://www.soundgym.co/blog/item?id=mixing-your-music',
          },
          {
            courseTitle: 'Home Recording Studio 101: How to Mix Audio',
            courseImage: CourseImage.MasterClass,
            level: 'Beginner',
            link: 'https://www.masterclass.com/articles/home-recording-studio-101-how-to-mix-audio',
          },
          {
            courseTitle: 'Learn How to Mix Music with Young Guru',
            courseImage: CourseImage.SkillShare,
            level: 'Intermediate',
            link: 'https://www.skillshare.com/en/classes/Learn-How-to-Mix-Music-with-Young-Guru/1735478924',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Game Music',
        image: MusicLogo.GameMusic,
        courses: [
          {
            courseTitle: 'Introduction to Sound Design for Moving Images',
            courseImage: CourseImage.Udemy,
            level: 'Beginner',
            link: 'https://www.udemy.com/course/sound_design_intro/',
          },
          {
            courseTitle:
              'Everything You Need To Know About Composing Video Game Music',
            courseImage: CourseImage.GameMaker,
            level: 'Intermediate',
            link: 'https://gamemaker.io/en/blog/compose-video-game-music',
          },
          {
            courseTitle: 'The Guide To Composing Music For Video Games',
            courseImage: CourseImage.MidNightMusic,
            level: 'Beginner',
            link: 'https://midnightmusic.com/2016/06/the-guide-to-composing-music-for-video-games/',
          },
          {
            courseTitle: 'Composing Video Game Music: 14 Tips for Beginners',
            courseImage: CourseImage.ComposerCode,
            level: 'Intermediate',
            link: 'https://composercode.com/how-to-make-game-music/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Songwriting',
        image: MusicLogo.SongWriting,
        courses: [
          {
            courseTitle: 'Songwriting: Writing the Lyrics',
            courseImage: CourseImage.Coursera,
            level: 'Beginner',
            link: 'https://www.coursera.org/learn/songwriting-lyrics',
          },
          {
            courseTitle: 'Update: 8 Steps to Learning Basic Songwriting',
            courseImage: CourseImage.CollonnyMusic,
            level: 'Intermediate',
            link: 'https://www.connollymusic.com/stringovation/6-steps-to-learning-basic-song-writing',
          },
          {
            courseTitle:
              'Songwriting Tips: 10 Techniques for Writing Memorable Songs',
            courseImage: CourseImage.MasterClass,
            level: 'Beginner',
            link: 'https://www.masterclass.com/articles/songwriting-tips-techniques-for-writing-memorable-songs',
          },
          {
            courseTitle: 'A Guide to Creating Stronger Melodies',
            courseImage: CourseImage.Alison,
            level: 'Intermediate',
            link: 'https://alison.com/course/a-guide-to-creating-stronger-melodies',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Reading Music',
        image: MusicLogo.ReadingMusic,
        courses: [
          {
            courseTitle: 'How To Read Sheet Music: A Step-by-Step Guide',
            courseImage: CourseImage.MusicNote,
            level: 'Beginner',
            link: 'https://www.musicnotes.com/blog/how-to-read-sheet-music/',
          },
          {
            courseTitle: 'How to Read Music',
            courseImage: CourseImage.WikiHow,
            level: 'Intermediate',
            link: 'https://www.wikihow.com/Read-Music',
          },
          {
            courseTitle:
              '5 Tips For Learning To Read Music For The Beginning String Musician',
            courseImage: CourseImage.CollonnyMusic,
            level: 'Beginner',
            link: 'https://www.connollymusic.com/stringovation/5-tips-for-learning-to-read-music-for-the-beginning-string-musician',
          },
          {
            courseTitle: 'Music Theory for Electronic Producers',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/beginnerselectronicmusictheory/',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Singing',
        image: MusicLogo.Singing,
        courses: [
          {
            courseTitle:
              'How to Learn to Sing: Teach Yourself with 12 Simple Steps',
            courseImage: CourseImage.WikiHow,
            level: 'Beginner',
            link: 'https://www.wikihow.com/Learn-to-Sing',
          },
          {
            courseTitle: 'how to sing very well - beta version',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/how-to-sing-very-well/',
          },
          {
            courseTitle: '10 Steps to Learn to Sing',
            courseImage: CourseImage.VoiceLessions,
            level: 'Beginner',
            link: 'https://www.voicelessons.com/blog/beginners/10-steps-to-learn-to-sing-2/',
          },
          {
            courseTitle: 'Singing Popular Music',
            courseImage: CourseImage.Coursera,
            level: 'Intermediate',
            link: 'https://www.coursera.org/learn/singing-popular-music',
          },
        ],
        noofcourses: 4,
      },
      {
        title: 'Rapping',
        image: MusicLogo.Rapping,
        courses: [
          {
            courseTitle: "How To Rap For Beginner's Masterclass",
            courseImage: CourseImage.SkillShare,
            level: 'Beginner',
            link: 'https://www.skillshare.com/en/classes/How-To-Rap-For-Beginners-Masterclass/172366773',
          },
          {
            courseTitle: 'Freestyle rap',
            courseImage: CourseImage.Udemy,
            level: 'Intermediate',
            link: 'https://www.udemy.com/course/fantasticfreestyles/',
          },
          {
            courseTitle: 'How to Rap: Fundamentals',
            courseImage: CourseImage.Coursesity,
            level: 'Beginner',
            link: 'https://coursesity.com/course-detail/how-to-rap-fundamentals',
          },
          {
            courseTitle: 'How to Rap',
            courseImage: CourseImage.WikiHow,
            level: 'Intermediate',
            link: 'https://www.wikihow.com/Rap',
          },
        ],
        noofcourses: 4,
      },
    ],
  },
];
