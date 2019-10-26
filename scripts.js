var app = new function () {

  this.element = document.getElementById('countries');

  this.countries = ['Norway',
                    'Sweden',
                    'Denmark',
                    'Scotland',
                    'Ireland',
                    'England',
                    'Iceland',
                    'Germany',]

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
        data += '<div class="countryRow">';
        data += '<div class="countryName">' + this.countries[iterator] + '</div>';
        data += '<input type="button" class="editBtn" value="Edit" onclick="app.Edit(' + iterator + ')"></input>';
        data += '<input type="button" class="deleteBtn" value="Delete" onclick="app.Delete(' + iterator + ')"></input>';
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
