var app = new function () {

  this.element = document.getElementById('countries');

  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg', 'Iraq', 'China', 'Thailand', 'Greece'
  ];

  this.Count = function (data) {
    let element = document.getElementById('counter');
    let name = 'country';

    if (data) {
      if (data > 1) {
        name = 'countries';
      }
      element.innerHTML = data + ' ' + name;
    } else {
      element.innerHTML = 'No ' + name;
    }
  };

  this.FetchAll = function () {
    let data = '';

    if (this.countries.length > 0) {
      for (iterator = 0; iterator < this.countries.length; iterator++) {
        data += '<div class="country">';
        data += '<div class="countryName">' + this.countries[iterator] + '</div>';
        data += '<div class="editBtn"><button onclick="app.Edit(' + iterator + ')"></button></div>';
        data += '<div class="deleteBtn"><button onclick="app.Delete(' + iterator + ')"></button></div>';
        data += '</div>';
      }
    }

    this.Count(this.countries.length);
    return this.element.innerHTML = data;
  };

  this.Add = function () {
    element = document.getElementById('add-name');
    // Get the value
    let country = element.value;

    if (country/* && !countries.contains(country)*/) {
      // Add the new value
      this.countries.push(country.trim());
      // Reset input value
      element.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    let element = document.getElementById('edit-name');
    // Display value in the field
    element.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function () {
      // Get value
      let country = element.value;

      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };

}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
