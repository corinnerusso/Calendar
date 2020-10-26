$(function() {
            
    let start = moment();
    let end = moment();
    moment.locale('fr');
 

    function cb(start, end) {
       $('#reportrange span').html('du ' + start.format('D MMMM YYYY') + ' au ' + end.format('D MMMM YYYY') + ' pendant ');
   }

   $('#reportrange').daterangepicker({
       startDate: start,
       endDate: end,
       autoApply:true,
       showDropdowns:true,
       ranges: {
          'Aujourd hui': [moment(), moment()],
          'Hier': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Les 7 derniers jours': [moment().subtract(6, 'days'), moment()],
          'Les 30 derniers jours': [moment().subtract(29, 'days'), moment()],
          'Ce mois': [moment().startOf('month'), moment().endOf('month')],
          'Cette année': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],

       },
       "alwaysShowCalendars": true,
   

   }, cb);

   cb(start, end);

   $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
      $('#numberdays').val(picker.endDate.diff(picker.startDate, "days"));
   });
      
});
