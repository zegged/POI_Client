angular.module('citiesApp')

    .controller('poiCtrl', ['poiService','$scope','$rootScope','favService', function (poiService,$scope,$rootScope,favService) {


        self = this;
      //  self.guest =  $scope.indxCtrl.guest
        //self.cities = {}
       
        //self.cities = poiService.pois
       // favService.getSize()

       /* self.sites = poiService.get().then(function(data){
            self.sites = data
        })

        
       self.sites = poiService.allsites
        */
        //console.log(self.sites)

      //  self.allsites=poiService.allsites

        self.sites = []

        poiService.get()

        self.categories = ['Resturants', 'Parks', 'Academic institutions', 'Cinema', '123']
        self.pois = [] //favs
        favService.get()
        self.size = self.pois.length
       //self.sites = poiService.allsites
        
        //console.log(self.sites)

        self.selectedSite = function (id) {
            poiService.id = id
        }

/*
        self.sites = poiService.re()
        
      
            
*/
self.selectedSite = function (site) {
    poiService.setPoi(site)
    console.log(site.name)
   
}
    self.clearFilter = function(){
        self.selectedCategory = ''
    }




self.removeFromFavorites = function(t){
    console.log("removing fav")
    console.log(t.id)
    var index = self.pois.indexOf(t.id);
 
    if (index > -1) {
        self.pois.splice(index, 1);
    }
}

self.addToFavorits = function(t){
    console.log("adding to fav")
    console.log(t.id)
    //favService.set([1,3,6])
    self.pois.push(t.id)

   // self.
}

        

    }])

