angular.module('citiesApp')
    .service('poiService', ['$http', function ($http) {
        let serverUrl = 'http://localhost:4000/'
        self = this

        console.log("db service init")
        let mysites = [
            { id: 1, name: "Paris", state: "France", pic: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/7c/f2/eiffel-tower-priority.jpg" },
            { id: 2, name: "Jerusalem", state: "Israel", pic: "https://cdni.rt.com/files/2017.12/article/5a3fe04efc7e93cd698b4567.jpg" },
            { id: 3, name: "London", state: "England", pic: "http://www.ukguide.co.il/Photos/England/London/British-Royal-Tour.jpg" }
        ]

        let fresh = false

        //self.get = function(){
        //    return self.allsites
        //}
        // self.set = function(t){
        //     allsites = t
        // }
        self.get = function () {
            if (fresh === false) {
                fresh = true;
                $http.get(serverUrl + "poi/getPOIs")
                    .then(function (response) {
                        console.log('fgds')
                        //self.reg.content = response.data
                        //console.log(response.data)
                        //  self.sites=response.data
                        //for (x in response.data){self.allsites.push(x)}
                        self.sites = response.data

                        mysites = response.data
                        console.log("got pois")
                        console.log(self.sites)
                        //$scope.poiCtrl.sites = response.data

                    }, function (response) {
                        //self.reg.content = response.data
                        //Second function handles error
                        //self.reg.content = "Something went wrong";

                        console.log("didnt get pois")
                        // return cities
                    });
            }
            else {
                self.sites = mysites
            }
        }

        let poiInDb = {}

        self.setPoi = function (poi) {
            poiInDb = poi
            console.log(poiInDb)
            //   console.log(self.poi.name)
            self.poi=poiInDb

        }


        self.getPoi = function () {
            self.poi = poiInDb
            console.log(1234)
            console.log(poiInDb)
            //console.log(self.poii.name)
            return poiInDb
        }



    }])