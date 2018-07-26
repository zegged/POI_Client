angular.module('citiesApp')
    .controller('homeController', ['poiService', 'favService', function (poiService, favService) {
        self = this;

        self.sites = []
        self.pois = [] //favs

        poiService.get()
        favService.get()
        self.cats = []
        favService.getCategories()

        self.poiArray = []


        //  calcService.get()


        length = self.pois.length

        if(self.pois.length <= 0)
            self.favExsist = false
            else
            self.favExsist = true

        id1 = self.pois[length-1]
        id2 = self.pois[length-2]
        
            for (i = 0; i < self.sites.length; i++) {
                if (self.sites[i].id === id1) {
                    index1 = i
                }
                if (self.sites[i].id === id2) {
                    index2 = i
                }
            }





        self.poi1 = self.sites[self.index1]
        self.poi2 = self.sites[self.index2]
        self.poiArray.push(self.poi1)
        self.poiArray.push(self.poi2)

        self.selectedSite = function (site) {
            poiService.setPoi(site)

        }

        self.index1 = -1
        self.index2 = -1
        i=0


        for (i = 0; i < self.sites.length; i++) {
            if (self.sites[i].category == self.cats[0] && self.index1 == '')
                self.index = i
            if (self.sites[i].category == self.cats[1] && self.index1 == '')
                self.index2 = i
        }
        console.log(self.index1)
    }]);
