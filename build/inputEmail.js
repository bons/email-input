angular.module("bInputEmail", [])
.directive("bInputEmail",function($parse, $compile)
{
  return {
    restrict: "A",
    controller: function($scope)
    {
      $scope.inputEmail = {
        list : {
          gmail : "gmail.com",
          hotmail : "hotmail.com",
          outlook : "outlook.com",
          yahoo : "yahoo.com",
          aol : "aol.com",
          live : "live.com",
          icloud : "icloud.com",
        }
      };

      function check(value, checker)
      {
        if(value.length == 2 && checker.search(value[1]) == 0 )
          return checker.replace(value[1], "");

        return "";
      }

      this.validateString = function(newVal)
      {

        if(!newVal)
          return;

        var split = newVal.split("@");

        if(split.length >= 2)
        {

          for(var allowed in $scope.inputEmail.list)
          {
            if(split[1].charAt(0) == allowed.charAt(0))
              return check(split, $scope.inputEmail.list[allowed]);
          }

          return "";
        }
      }
    },

    link: function(scp, elm, attr, inputEmailController)
    {
      //scp.autocomplete.email = attr.parentEmail || "";

      var input = elm.find("input");
      var spanTrackVal = angular.element('<track class="autocomplete">{{inputEmail.email}}</track>');
      var spanAutocomplete = angular.element('<autocomplete class="autocomplete">{{inputEmail.autocomplete}}</autocomplete>');

      spanTrackVal = $compile(spanTrackVal)(scp, function(clonedElement, scp)
      {
        elm.append(clonedElement);
      });

      spanAutocomplete = $compile(spanAutocomplete)(scp, function(clonedElement, scp)
      {
        elm.append(clonedElement);
      });

      input
        .css("position", "absolute")
        .attr("autocomplete", "off");

      elm
        .attr("position", "relative");

      spanAutocomplete
        .css("display", "inline-block")
        .css("position", "relative");

      spanTrackVal
        .css("display", "inline-block")
        .css("visibility", "hidden");

      //Watch the email input
      scp.$watch("inputEmail.email", function(newVal)
      {
        newVal = newVal || "";
        scp.inputEmail.autocomplete = inputEmailController.validateString(newVal);
      }, true);

      input.bind("blur", function(evt)
      {
        
        if(scp.inputEmail.autocomplete != "")
        {
          scp.inputEmail.email += scp.inputEmail.autocomplete;
          scp.inputEmail.autocomplete = "";
          scp.$apply();
        }
      });

      //fix for initial values
      scp.$apply();
    }
  };
});
