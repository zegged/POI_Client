angular.module('citiesApp')
    .controller('favoritesController', ['$http','poiService','favService', function ($http,poiService,favService) {

        self = this

        let serverUrl = 'http://localhost:4000/'

        self.sites = []
        self.pois = [] //favs
        
        poiService.get()
<<<<<<< HEAD
        console.log('in favs')
        self.selectedSite = function (site) {
            poiService.setPoi(site)
            console.log(site.name)
        }

        $http.get(serverUrl + "poi/getFavorites")
            .then(function (response) {
                console.log('got my fav')
                //self.reg.content = response.data

                console.log(response.data)
                console.log(response.data[0])
                console.log(response.data[0].id)
                console.log(response.data[1].id)
                //$scope.poiCtrl.sites = response.data
                var count = 0
               while (count < response.data.length){
                    console.log(response.data[count])
                    console.log(response.data[count].id)

                    self.pois.push(response.data[count].id)
                    count+=1
                }
                console.log(self.pois)
                
                //self.pois = response.data
            }, function (response) {
                //self.reg.content = response.data
                //Second function handles error
                //self.reg.content = "Something went wrong";

                console.log("didnt get pois")
                console.log(response)
                // return cities
            });
           
=======
        favService.get()

        
        //console.log('in favs')
>>>>>>> b2cb33b2be643c751e0dcc0dd2cd08a242a9ce88

       
    }]);