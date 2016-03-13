angular.module('starter.controllers', [])
    .controller('TabCtrl', function($scope) {
        $scope.chang = function(type) {
            $scope.action = type;
        }
    })
    .controller('HomeCtrl', function($scope) {
        $scope.storeList = [{
            storeName: '动真格休闲主题餐厅',
            storeDesc: "6店通用套餐饭二选一,提供免费WIFI,免预约",
            storeImg: "./img/img01.png",
            clickCount: 111,
            shareDesc: "分享赚钱5元",
            shareIcon: './img/icon_2_1_1.png'
        },{
            storeName: '动真格休闲主题餐厅',
            storeDesc: "6店通用套餐饭二选一,提供免费WIFI,免预约",
            storeImg: "./img/img01.png",
            clickCount: 111,
            shareDesc: "分享赚钱5元",
            shareIcon: './img/icon_2_1_1.png'
        },{
            storeName: '动真格休闲主题餐厅',
            storeDesc: "6店通用套餐饭二选一,提供免费WIFI,免预约",
            storeImg: "./img/img01.png",
            clickCount: 111,
            shareDesc: "分享赚钱5元",
            shareIcon: './img/icon_2_1_1.png'
        },{
            storeName: '动真格休闲主题餐厅',
            storeDesc: "6店通用套餐饭二选一,提供免费WIFI,免预约",
            storeImg: "./img/img01.png",
            clickCount: 111,
            shareDesc: "分享赚钱5元",
            shareIcon: './img/icon_2_1_1.png'
        },{
            storeName: '动真格休闲主题餐厅',
            storeDesc: "6店通用套餐饭二选一,提供免费WIFI,免预约",
            storeImg: "./img/img01.png",
            clickCount: 111,
            shareDesc: "分享赚钱5元",
            shareIcon: './img/icon_2_1_1.png'
        }]


    })
    .controller('InterActionCtrl', function() {

    })
    .controller('DashCtrl', function($scope) { })

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
