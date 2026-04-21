import { test, expect } from "@playwright/test";

test.describe("Siapa Adopsi Test www.siapadopsi.web.id", () => {
  test.skip(
    ({ browserName }) => browserName !== "chromium",
    "Only Chromium Test",
  );
  // test.skip(({ channel }) => channel !== "msedge", "Only MSEdge Test");
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Tes Kesiapan Adopsi" }).click();
    await page.getByRole("button", { name: "Mulai Tes" }).click();
  });

  test("Layak Adopsi Test", async ({ page }) => {
    await page
      .getByRole("button", { name: "Rumah dengan halaman luas" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ya, diizinkan tanpa batasan" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "-3 jam" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Jarang (1-2x setahun)" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ya, sudah menyiapkan dana" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Lebih dari Rp" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Sangat familiar, pernah" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ya, dan tahu kapan harus ke" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ingin memiliki teman dan siap" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ya, semua setuju dan mendukung" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Kucing akan tetap dibawa dan" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ya, sangat siap berkomitmen" })
      .click();
    await page.getByRole("button", { name: "Lihat Hasil" }).click();

    await expect(page.getByText(/Sangat Siap!/)).toBeVisible();
    await expect(page).toHaveScreenshot("siapadopsi-ready.png");
  });

  test("Belum Siap Adopsi Test 1", async ({ page }) => {
    await page
      .getByRole("button", { name: "Tempat tinggal tidak tetap" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Tidak diizinkan" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Kurang dari 1 jam" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Sangat sering (lebih dari 12x" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Kesulitan finansial saat ini" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Kurang dari Rp" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Tidak tahu sama sekali" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Tidak tahu", exact: true }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Hanya karena lucu/tren" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Ada yang keberatan/alergi" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Mungkin akan dititipkan/" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Tidak bisa berkomitmen sejauh" })
      .click();
    await page.getByRole("button", { name: "Lihat Hasil" }).click();

    await expect(page.getByText(/Belum Siap/)).toBeVisible();
    await expect(page).toHaveScreenshot("siapadopsi-not-ready.png");
  });

  test("Belum Siap Adopsi Test 2", async ({ page }) => {
    await page
      .getByRole("button", { name: "Apartemen/rumah dengan ruang" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Tidak yakin, belum menanyakan" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "-3 jam" }).click();
    await page
      .locator("section")
      .filter({ hasText: "Kembali ke Halaman UtamaTes" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Sering (lebih dari 6x setahun)" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Belum, tapi memiliki tabungan" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Rp 200.000 - Rp" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Cukup tahu dari membaca/" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Tidak tahu tapi mau belajar" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByText(
        "Ingin menyelamatkan kucing & berkomitmen jangka panjangIngin memiliki teman dan",
      )
      .click();
    await page
      .getByRole("button", { name: "Ingin memiliki teman dan siap" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page.getByRole("button", { name: "Hanya saya yang ingin" }).click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Akan mencari solusi terbaik" })
      .click();
    await page.getByRole("button", { name: "Selanjutnya" }).click();
    await page
      .getByRole("button", { name: "Tidak yakin dengan kondisi 15" })
      .click();
    await page.getByRole("button", { name: "Lihat Hasil" }).click();

    await expect(page.getByText(/Perlu Persiapan Lebih/)).toBeVisible();
    // await expect(page).toHaveScreenshot("siapadopsi-not-ready-2.png");
  });
});
