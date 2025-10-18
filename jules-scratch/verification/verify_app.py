from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    time.sleep(60)

    # Register
    page.goto("http://localhost:3000/register")
    page.screenshot(path="jules-scratch/verification/01_register_page.png")
    page.fill('input[placeholder="Company Name"]', "Test Company")
    page.fill('input[placeholder="Email"]', "test@example.com")
    page.fill('input[placeholder="Password"]', "password")
    page.click('button:text("Register")')
    page.wait_for_url("http://localhost:3000/login")
    page.screenshot(path="jules-scratch/verification/02_after_register.png")

    # Login
    page.goto("http://localhost:3000/login")
    page.fill('input[placeholder="Email"]', "test@example.com")
    page.fill('input[placeholder="Password"]', "password")
    page.click('button:text("Login")')
    page.wait_for_url("http://localhost:3000/")
    page.screenshot(path="jules-scratch/verification/03_after_login.png")

    # Create Sourcing Request
    page.goto("http://localhost:3000/sourcing/new")
    page.screenshot(path="jules-scratch/verification/04_create_request_page.png")
    page.fill('input[placeholder="Material Name"]', "Cement")
    page.fill('input[placeholder="Quantity"]', "100")
    page.fill('input[placeholder="Unit"]', "bags")
    page.select_option('select', 'CEMENT')
    page.click('button:text("Create Request")')
    page.wait_for_url("http://localhost:3000/my-requests")
    page.screenshot(path="jules-scratch/verification/05_after_create_request.png")

    # Subscribe to a plan
    page.goto("http://localhost:3000/plans")
    page.screenshot(path="jules-scratch/verification/06_plans_page.png")
    page.click('button:text("Select Plan")')
    page.wait_for_url("http://localhost:3000/subscription")
    page.screenshot(path="jules-scratch/verification/07_after_subscribe.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)