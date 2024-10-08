package handler

import (
	"github.com/artalkjs/artalk/v2/internal/core"
	"github.com/artalkjs/artalk/v2/server/common"
	"github.com/gofiber/fiber/v2"
)

// @Id           GetVersion
// @Summary      Get Version Info
// @Description  Get the version of Artalk
// @Tags         System
// @Produce      json
// @Success      200  {object}  common.ApiVersionData
// @Router       /version  [get]
func Version(app *core.App, router fiber.Router) {
	router.All("/version", func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusOK).JSON(common.GetApiVersionDataMap())
	})
}
