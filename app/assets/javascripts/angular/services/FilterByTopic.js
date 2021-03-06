function FilterByTopic() {
  var self = this;

  self.filter = {};

  self.filterByTopic = filterByTopic;
  self.Topics = Topics;

  function getTopics() {
    return (self.lectures || []).
      map(function (lecture) { return lecture.topic; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
};

angular.module('Flatcasts').service('FilterByTopic', FilterByTopic);
