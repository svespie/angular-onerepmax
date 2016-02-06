Description
-----------
*angular-onerepmax* is a simple angularjs service that encapsulates the *onerepmax-js* library. You can read about *onerepmax-js* here: http://svespie.github.io/onerepmax-js/. *onerepmax-js* creates a global variable that can be used to perform these calculations, but it does have its problems. The first one, is of course, the global variable. The second one is that it makes testing any JavaScript that uses *onerepmax* more challenging than it ought to be.

With angular, there is a high priority placed on unit testing and testability. This is accomplished through dependency injection. Where necessary, the components such as *onerepmax* that a unit of code depends on can be injected pretty easily by angular. This aids unit testing through the ability to mock these dependencies. It is for this purpose that this particular project was created. It moves the *onerepmax* library out of the global scope and into an injectable angularjs service.

Usage
-----
To use *angular-onerepmax*, use your favorite means of including the source code into your project or webpage. This file should be loaded after angularjs itself is loaded. The script registers the service under the name **angular.onerepmax**, which will need to be included as a dependency in your application. Once these two things are done, the service can be injected into your controller(s) and/or service(s) how you see fit using the identifier **onerepamx**.

Once the service has been provided, it can be used like the standard *onerepmax-js* library. For details on how to use the library itself, please see its GitHub project page at http://svespie.github.io/onerepmax-js/.

Demo
----
Included in this project is a very simple demonstration of the steps required to inject the service and use it. This demo can be found under /demo. Since it is a stripped down angular application that does almost nothing, all of the JavaScript defining the application simply resides in a script tag in /demo/index.html.

The first thing to note is that at the bottom of the body tag, we make reference to first angular and then the *angular-onerepmax service*.

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
    <script src="../src/angular-onerepmax.js"></script>
    
After including these JavaScript files, a third script tag provides the inline JavaScript that creates the demo application and a simple controller.

    (function () {
        'use strict';

        angular.module('app', ['angular.onerepmax']).controller('MainCtrl', ['onerepmax', function (onerepmax) {
            var self = this;

            self.weight = 135;
            self.reps = 10;
            self.units = 'lbs.';
            self.max = onerepmax.calculate(self.weight, self.reps, 'average');
        }]);
    }());
    
Some knowledge of angular is assumed, so hopefully this doesn't look very foreign. Essentially, we wrap the creation of the angular application within an IIFE. We create an application called app and identify *angular.onerepmax* as a dependency. We then create a controller and identify that this controller is looking for *onerepmax* to be injected into it. The service is then used to populate some model data, which can then be seen when the application is run in a browser.

Notes
-----
It should be noted that both this project and the *onerepmax-js* project are both in their infancy. There currently are no numbered versions of either. This is important to understand because in creating this angular service, the code from *onerepmax-js* was simply copied and pasted into some code the creates an angular service. This means that there potentially could be a mis-match between these two projects and there wouldn't be an easy way to make that determination. My best advice at the moment is to let the tests be your guide.

Unit Tests
----------
Unit tests are not yet available but they are in the works. Stay tuned!