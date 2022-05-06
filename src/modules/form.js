const form = () => {
  return `<div class="form-group mb-2">
  <input type="text" class="form-control term" placeholder="Address"
  </div>
  <div class="form-group mb-2">
      <input type="text" class="form-control result" readonly>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Search</button>
  `
}
export default form
